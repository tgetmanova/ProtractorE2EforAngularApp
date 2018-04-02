const BasePage = require('.././pages/BasePage').BasePage;
const Reporting = require('./../utils/ReportUtils').ReportUtils;

const detailSubUrl = 'detail/';

class HeroDetailsPage extends BasePage {

  constructor() {
    super();
    this.heroDetailsHeader = text => element(by.cssContainingText('h2', text + ' details!'));
    this.heroIdentifier = element(by.xpath('//div[label[text() ="id: "]]'));
    this.heroNameTextField = element(by.xpath('//div[label[text() = "name: "]]')).element(by.css('input'));
    this.saveButton = element(by.buttonText('Save'));
  }

  isHeroTitleDisplayed(heroName) {
    super.waitForCondition(ExpectedConditions.urlContains('detail'), 'URL indicates we are on Hero Details page');
    super.verifyElementIsDisplayed(this.heroDetailsHeader(heroName), 'Hero Details page header');
  }

  typeIntoHeroNameTextField(text) {
    this.heroNameTextField.clear();
    super.enterTextIntoTextField(this.heroNameTextField, text, 'Hero Name text field');
    return this;
  }

  clickSaveButton() {
    super.clickTheElement(this.saveButton, 'Save Hero Details button');
  }

  async isHeroDetailIdentifierAsExpected() {
    let url = await browser.driver.getCurrentUrl();
    let expectedId = url.substring(url.indexOf(detailSubUrl) + detailSubUrl.length, url.length);
    Reporting.addStep(`Checking that displayed Hero contains expected ID: [${expectedId}]`, () =>
      expect(this.heroIdentifier.getText()).toContain('id: ' + expectedId));
  }

}

exports.HeroDetailsPage = HeroDetailsPage;
