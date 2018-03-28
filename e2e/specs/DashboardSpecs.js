const HeroContext = require('../steps/HeroContext').HeroContext;
const Dashboard = require('../steps/DashboardContext').DashboardContext;

const Hero = require('../data/Hero').Hero;

const Util = require('../utils/UtilData').UtilData;
const LAUNCH_DEFAULT_URL = require('../utils/UtilConstants').LAUNCH_DEFAULT_URL;

describe('Dashboard and heroes specs test suite', () => {

  beforeEach(() => {
    browser.driver.get(LAUNCH_DEFAULT_URL);
  });

  it('Can search for newly added Hero on Dashboard page', () => {
    let hero = new Hero().withRandomName();
    let heroContext = new HeroContext().withNewHero(hero);

    heroContext.openHeroesList().createHeroes();
    let dashboard = new Dashboard()
      .openFromTopNavigation()
      .searchForHero(hero.getName());

    dashboard.verifyHeroIsFound(hero.getName());
  });

  it('Can create new Hero', () => {
    let hero = new Hero().withRandomName();
    let heroContext = new HeroContext().withNewHero(hero);
    heroContext.openHeroesList().createHeroes();

    heroContext.verifyHeroesCreated();
  });

  it('Can see Hero detail preview on Heroes page', () => {
    let heroContext = new HeroContext().openHeroesList();
    let heroToPreview = heroContext
      .withNewHeroes(Util.generateRandomNumberOfHeroes(1, 3))
      .takeRandomHero();

    heroContext.createHeroes();

    heroContext.previewHeroDetails(heroToPreview);
  });

  it('Displayed Hero identifier is correct', () => {
    let hero = new Hero().withRandomName();
    let heroContext = new HeroContext().withNewHero(hero);
    heroContext.openHeroesList().createHeroes();
    heroContext.viewHeroDetails(hero).verifyCorrectHeroDetailsAreDisplayed(hero);
  });

  fit('Can delete Hero from the list', () => {
    let heroContext = new HeroContext().openHeroesList();
    heroContext.deleteHeroAndVerifyItIsDeleted();
  });

});
