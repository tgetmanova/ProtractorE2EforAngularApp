const HeroContext = require('../context/HeroContext').HeroContext;
const Dashboard = require('../context/DashboardContext').DashboardContext;
const GeneralContext = require('../context/GeneralContext').GeneralContext;

const Hero = require('../data/Hero').Hero;

const LAUNCH_DEFAULT_URL = require('../utils/UtilConstants').LAUNCH_DEFAULT_URL;

describe('Dashboard functionality test suite', () => {

  beforeEach(() => {
    browser.driver.get(LAUNCH_DEFAULT_URL);
  });

  it('Can search for newly added Hero on Dashboard page', () => {
    let hero = new Hero().withRandomName();
    let heroContext = new HeroContext().withNewHero(hero);

    heroContext.openHeroesList().createHeroes();
    new Dashboard()
      .openFromTopNavigation()
      .searchForHero(hero.getName())
      .selectSearchResult(hero.getName());

    heroContext.verifyCorrectHeroDetailsAreDisplayed(hero);
  });

  it('Can view several search results for newly added Heroes on Dashboard page', () => {
    let hero = new Hero().withRandomName();
    let anotherHero = new Hero().withPartialName(hero.getName(), hero.getName().length/2);
    let heroContext = new HeroContext().withNewHeroes([hero, anotherHero]);

    heroContext.openHeroesList().createHeroes();
    new Dashboard()
      .openFromTopNavigation()
      .searchForHero(hero.getName().substring(0, hero.getName().length/2))
      .verifyCurrentSearchResults([hero, anotherHero], []);
  });

  it('Deleted Hero cannot be found via Search on Dashboard page', () => {
    let hero = new Hero().withRandomName();
    let anotherHero = new Hero().withPartialName(hero.getName(), hero.getName().length/2);
    let heroContext = new HeroContext().withNewHeroes([hero, anotherHero]);

    let searchString = hero.getName().substring(0, hero.getName().length/2);

    heroContext.openHeroesList().createHeroes();
    let dashboard = new Dashboard()
      .openFromTopNavigation()
      .searchForHero(searchString)
      .verifyCurrentSearchResults([hero, anotherHero], []);

    heroContext.openHeroesList().deleteHero(hero.getName());
    dashboard.openFromTopNavigation()
      .searchForHero(searchString)
      .verifyCurrentSearchResults([anotherHero], [hero])
  });

  it('Deleted Hero should disappear from Top Heroes on Dashboard', () => {
    let heroDeletionContext = new GeneralContext();
    heroDeletionContext.selectRandomTopHeroFromDashboard();
    heroDeletionContext.deleteHero();
    heroDeletionContext.verifyHeroIsNotInTheTopList();
  });

  it('Can open Hero Details from Top Heroes on Dashboard', () => {
    let topHeroContext = new GeneralContext();
    topHeroContext.selectRandomTopHeroFromDashboard();
    topHeroContext.openTopHeroDetails();
    topHeroContext.verifyHeroDetails();
  });

});
