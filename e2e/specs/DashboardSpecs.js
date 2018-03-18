const DashboardPage = require('./../pages/DashboardPage').DashboardPage;
const HeroDetailsPage = require('./../pages/HeroDetailsPage').HeroDetailsPage;
const HeroesPage = require('./../pages/HeroesPage').HeroesPage;

describe('Dashboard specs test suite', () => {

  it('Can search for existing hero on Dashboard page', () => {
    let dashboardPage = new DashboardPage();
    let heroDetailsPage = new HeroDetailsPage();
    let expectedHero = 'Narco';
    dashboardPage.open();
    dashboardPage.typeInSearchField(expectedHero);
    dashboardPage.selectSearchResultValue(expectedHero);
    heroDetailsPage.isHeroTitleDisplayed(expectedHero);
  });

  it('Can create new Hero', () => {
    let heroesPage = new HeroesPage();
    heroesPage.open();
    heroesPage.clickAddHeroButton();
    let name = 'newTestHero';
    heroesPage.typeHeroName(name);
    heroesPage.clickSaveButton();
    heroesPage.isHeroAdded(name)
  });

});
