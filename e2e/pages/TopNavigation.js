class TopNavigation {

  constructor() {
    this.dashboardLink = element(by.css('[ng-reflect-router-link="/dashboard"]'));
    this.heroesLnk = element(by.css('[ng-reflect-router-link="/heroes"]'));
  }

  clickDashboardLink() {
    this.dashboardLink.click();
  }

  clickHeroesLink() {
    this.heroesLnk.click();
  }
}

exports.TopNavigation = TopNavigation;
