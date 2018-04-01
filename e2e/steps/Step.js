const DashboardContext = require('./DashboardContext').DashboardContext;
const HeroContext = require('./HeroContext').HeroContext;
const Random = require('../utils/Random').Random;

class Step {

  constructor() {
    this.heroContext = new HeroContext();
    this.dashboardContext = new DashboardContext();
  }

  selectRandomTopHeroFromDashboard() {
    this.dashboardContext.openFromTopNavigation();
    this.heroNameContext = this.dashboardContext.getTopHeroesNames()
      .then(names => {
        return Random.getRandomElement(names);
      });
  }

  deleteHero() {
    this.heroContext.openHeroesList()
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
            expect(names).not.toContain(name);
          });
      });
  }
}

exports.Step = Step;
