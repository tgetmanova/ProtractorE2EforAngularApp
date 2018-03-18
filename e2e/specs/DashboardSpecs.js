const DashboardPage = require('./../pages/DashboardPage').DashboardPage;
const HeroDetailsPage = require('./../pages/HeroDetailsPage').HeroDetailsPage;
const Hero = require('./../steps/Hero').Hero;

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

  fit('Can create new Hero', () => {
    let hero = new Hero('newTestHero').create();
    hero.verifyHeroCreated();
  });

});
