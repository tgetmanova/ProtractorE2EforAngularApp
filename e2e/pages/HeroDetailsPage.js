const DEFAULT_WAIT_TIME_INTERVAL = require('.././utils/UtilData').DEFAULT_WAIT_TIME_INTERVAL;

class HeroDetailsPage {

  constructor() {
    this.heroDetailsHeader = text => element(by.cssContainingText('h2', text + ' details!'));

  }

  isHeroTitleDisplayed(heroname) {
    browser.driver.wait(ExpectedConditions.urlContains('detail'), DEFAULT_WAIT_TIME_INTERVAL);
    expect(this.heroDetailsHeader(heroname).isDisplayed()).toEqual(true);
  }

}

exports.HeroDetailsPage = HeroDetailsPage;
