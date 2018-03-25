const BasePage = require('.././pages/BasePage').BasePage;

class TopNavigation extends BasePage {

  constructor() {
    super();
    this.dashboardLink = element(by.css('[ng-reflect-router-link="/dashboard"]'));
    this.heroesLink = element(by.css('[ng-reflect-router-link="/heroes"]'));
  }

  clickDashboardLink() {
    super.clickTheElement(this.dashboardLink, 'Dashboard tile link');
  }

  clickHeroesLink() {
    super.clickTheElement(this.heroesLink, 'Heroes tile link');
  }
}

exports.TopNavigation = TopNavigation;
