const BasePage = require('.././pages/BasePage').BasePage;

const detailSubUrl = 'detail/';

class HeroDetailsPage extends BasePage {

  constructor() {
    super();
    this.heroDetailsHeader = text => element(by.cssContainingText('h2', text + ' details!'));
    this.heroIdentifier = element(by.xpath('//div[label[text() ="id: "]]'));
  }

  isHeroTitleDisplayed(heroname) {
    super.waitForCondition(ExpectedConditions.urlContains('detail'), 'URL indicates we are on Hero Details page');
    super.verifyElementIsDisplayed(this.heroDetailsHeader(heroname), 'Hero Details page header');
  }

  isHeroDetailIdentifierAsExpected() {
    browser.driver.getCurrentUrl().then(url => {
      let expectedId = url.substring(url.indexOf(detailSubUrl) + detailSubUrl.length, url.length);
      expect(this.heroIdentifier.getText()).toContain('id: ' + expectedId);
    });

  }

}

exports.HeroDetailsPage = HeroDetailsPage;
