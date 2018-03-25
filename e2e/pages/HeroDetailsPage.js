const BasePage = require('.././pages/BasePage').BasePage;

class HeroDetailsPage extends BasePage {

  constructor() {
    super();
    this.heroDetailsHeader = text => element(by.cssContainingText('h2', text + ' details!'));
  }

  isHeroTitleDisplayed(heroname) {
    super.waitForCondition(ExpectedConditions.urlContains('detail'), 'URL indicates we are on Hero Details page');
    super.verifyElementIsDisplayed(this.heroDetailsHeader(heroname), 'Hero Details page header');
  }

}

exports.HeroDetailsPage = HeroDetailsPage;
