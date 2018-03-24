const DEFAULT_WAIT_TIME_INTERVAL = require('.././utils/UtilConstants').DEFAULT_WAIT_TIME_INTERVAL;

const BasePage = require('.././pages/BasePage').BasePage;

class HeroesPage extends BasePage {

  constructor() {
    super();
    this.addHeroButton = element(by.buttonText('Add New Hero'));
    this.newHeroTextField = element(by.css('input'));
    this.saveButton = element(by.buttonText('Save'));
    this.heroElement = text => element(by.cssContainingText('[class="hero-element"]', text));
    this.heroPreviewElement = text => element(by.cssContainingText('h2', text.toUpperCase() + ' is my hero'));
  }

  open() {
    browser.get('/heroes');
    return this;
  }

  clickAddHeroButton() {
    browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].scrollIntoView(true)', this.addHeroButton.getWebElement());
    });
    this.addHeroButton.click();
    return this;
  }

  typeHeroName(name) {
    this.enterTextIntoTextField(this.newHeroTextField, name, 'Text Field for new Hero name');
    return this;
  }

  clickSaveButton() {
    this.saveButton.click();
    return this;
  }

  waitForHeroElementAppears(name) {
    browser.driver.wait(ExpectedConditions.presenceOf(this.heroElement(name)), DEFAULT_WAIT_TIME_INTERVAL);
    return this;
  }

  selectHeroElement(name) {
    this.heroElement(name).click();
    return this;
  }

  isHeroPreviewDisplayed(name) {
    expect(this.heroPreviewElement(name).isDisplayed()).toBeTruthy();
  }

}

exports.HeroesPage = HeroesPage;
