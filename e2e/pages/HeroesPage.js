class HeroesPage {

  constructor() {
    this.addHeroButton = element(by.buttonText('Add New Hero'));
    this.newHeroTextField = element(by.css('input'));
    this.saveButton = element(by.buttonText('Save'));
    this.heroElement = text => element(by.cssContainingText('[class="hero-element"]', text));
  }

  open() {
    browser.get('/heroes');
  }

  clickAddHeroButton() {
    browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].scrollIntoView(true)', this.addHeroButton.getWebElement());
    });
    this.addHeroButton.click();
  }

  typeHeroName(name) {
    this.newHeroTextField.sendKeys(name);
  }

  clickSaveButton() {
    this.saveButton.click();
  }

  isHeroAdded(name){
    browser.driver.wait(ExpectedConditions.presenceOf(this.heroElement(name)), 5000);
  }

}

exports.HeroesPage = HeroesPage;
