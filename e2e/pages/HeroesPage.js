const BasePage = require('.././pages/BasePage').BasePage;

class HeroesPage extends BasePage {

  constructor() {
    super();
    this.addHeroButton = element(by.buttonText('Add New Hero'));
    this.newHeroTextField = element(by.css('input'));
    this.saveButton = element(by.buttonText('Save'));
    this.heroElement = text => element(by.cssContainingText('[class="hero-element"]', text));
    this.heroElementDeleteButton = element(by.buttonText('Delete'));
    this.heroTilesElements = element.all(by.css('[class="hero-element"]'));
    this.heroPreviewElement = text => element(by.cssContainingText('h2', text.toUpperCase() + ' is my hero'));
    this.viewDetailsButton = element(by.buttonText('View Details'));
  }

  open() {
    browser.get('/heroes');
    return this;
  }

  clickAddHeroButton() {
    super.scrollToElement(this.addHeroButton, 'Add New Hero button');
    super.clickTheElement(this.addHeroButton, 'Add New Hero button');
    return this;
  }

  typeHeroName(name) {
    this.enterTextIntoTextField(this.newHeroTextField, name, 'Text Field for new Hero name');
    return this;
  }

  clickSaveButton() {
    super.clickTheElement(this.saveButton, 'Save new Hero button');
    return this;
  }

  waitForHeroElementAppears(name) {
    super.waitForCondition(ExpectedConditions.presenceOf(this.heroElement(name)),
      'Hero tile appears in the Heroes list');
    return this;
  }

  selectHeroElement(name) {
    super.clickTheElement(this.heroElement(name), 'Hero tile element');
    return this;
  }

  isHeroPreviewDisplayed(name) {
    super.verifyElementIsDisplayed(this.heroPreviewElement(name), 'Hero preview text label element');
  }

  clickViewDetailsButton() {
    super.clickTheElement(this.viewDetailsButton, 'View Hero Details button');
  }

  getHeroTilesTexts() {
    return this.heroTilesElements.map(i => i.getText());
  }

  clickDeleteHeroButton(name) {
    // TODO
    super.clickTheElement(this.heroElementDeleteButton);
    return this;
  }

}

exports.HeroesPage = HeroesPage;
