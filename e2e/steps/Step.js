const DashboardContext = require('./DashboardContext').DashboardContext;
const HeroContext = require('./HeroContext').HeroContext;

const Random = require('../utils/Random').Random;
const Reporting = require('../utils/ReportUtils').ReportUtils;

class Step {

  constructor() {
    this.heroContext = new HeroContext();
    this.dashboardContext = new DashboardContext();
  }

  selectRandomTopHeroFromDashboard() {
    this.dashboardContext.openFromTopNavigation();
    this.heroNameContext = this.dashboardContext.getTopHeroesNames()
      .then(names => {
        let randomHeroName = Random.getRandomElement(names);
        Reporting.addStep(`Selecting random Top Hero: [${randomHeroName}] from Top Hero list: [${names}]`);
        Reporting.attachText('Initial Top Heroes List', names.join(', '));
        return randomHeroName;
      });
  }

  deleteHero() {
    this.heroContext.openHeroesList();
    this.heroNameContext
      .then(heroName => {
        this.heroContext.deleteHero(heroName);
        return heroName;
      });
  }

  verifyHeroIsNotInTheTopList() {
    this.heroNameContext
      .then(name => {
        this.dashboardContext.openFromTopNavigation();
        this.dashboardContext.getTopHeroesNames()
          .then(names => {
            Reporting.addStep(`Verifying [${name}] is not displayed within Top Heroes list: [${names}]`, () => {
              expect(names).not.toContain(name);
            });
            Reporting.attachText('Final Top Heroes List', names.join(', '));
          });
      });
  }
}

exports.Step = Step;