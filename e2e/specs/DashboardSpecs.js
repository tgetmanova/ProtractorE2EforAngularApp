const DashboardPage = require('./../pages/DashboardPage').DashboardPage;
const HeroDetailsPage = require('./../pages/HeroDetailsPage').HeroDetailsPage;

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

});
