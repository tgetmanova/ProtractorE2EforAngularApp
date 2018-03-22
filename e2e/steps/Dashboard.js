const DashboardPage = require('./../pages/DashboardPage').DashboardPage;
const HeroDetailsPage = require('./../pages/HeroDetailsPage').HeroDetailsPage;
const TopNavigation = require('./../pages/TopNavigation').TopNavigation;

class Dashboard {

  constructor() {
    this.dashboardPage = new DashboardPage();
    this.heroDetailsPage = new HeroDetailsPage();
    this.topNavigation = new TopNavigation();
  }

  openFromTopNavigation() {
    this.topNavigation.clickDashboardLink();
    return this;
  }

  searchForHero(heroName) {
    this.dashboardPage.typeInSearchField(heroName);
    this.dashboardPage.selectSearchResultValue(heroName);
    return this;
  }

  verifyHeroIsFound(heroName) {
    this.heroDetailsPage.isHeroTitleDisplayed(heroName);
  }

}

exports.Dashboard = Dashboard