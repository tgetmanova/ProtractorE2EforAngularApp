const BasePage = require('.././pages/BasePage').BasePage;

class HeroesPage extends BasePage {

  constructor() {
    super();
    this.addHeroButton = element(by.buttonText('Add New Hero'));
    this.newHeroTextField = element(by.css('input'));
    this.saveButton = element(by.buttonText('Save'));
    this.heroElement = text => element(by.cssContainingText('[class="hero-element"]', text));
    this.heroSpanElements = element.all(by.css('[class="hero-element"]'));
    this.heroIdentifierSpanElement = heroSpanElement => heroSpanElement.element(by.css('span'));
    this.heroPreviewElement = text => element(by.cssContainingText('h2', text.toUpperCase() + ' is my hero'));
    this.viewDetailsButton = element(by.buttonText('View Details'));

    // CSS templates based elements
    this.heroTileElement = index => element(by.css(`body > my-root > my-heroes > ul > li:nth-child(${index})`));
    this.heroTileElementSpan = index => this.heroTileElement(index).element(by.css('span'));
    this.heroTileElementIdSpan = index => this.heroTileElement(index).element(by.css('span > span'));
    this.heroTileElementDeleteButton = index => this.heroTileElement(index).element(by.css('button'));
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

  getHeroTilesTextsExcludingIdentifiers() {
    return this.heroSpanElements.map(heroSpan => {
      return this.heroIdentifierSpanElement(heroSpan).getText()
        .then(idText => {
          return heroSpan.getText()
            .then(fullText => {
              return fullText.replace(`${idText} `, '');
            });
        });
    });
  }

  getHeroSpanElementsCount() {
    return this.heroSpanElements.count();
  }

  getHeroTileTextExcludingIdentifierAtIndex(index) {
    return this.heroTileElementSpan(index).getText()
      .then(fullText => {
        return this.heroTileElementIdSpan(index).getText()
          .then(idText => {
            return fullText.replace(`${idText} `, '');
          })
      });
  }

  clickDeleteHeroButton(name) {
    let indexToDeleteAt;
    this.getHeroSpanElementsCount()
      .then(count => {
        for (let i = 1; i <= count; i++) {
          this.getHeroTileTextExcludingIdentifierAtIndex(i)
            .then(text => {
              if (text === name) {
                indexToDeleteAt = i;
              }
            });
        }
      })
      .then(() => {
        if (indexToDeleteAt === undefined) {
          throw Error(`Failed to find hero with name: ${name}`);
        }
        super.clickTheElement(this.heroTileElementDeleteButton(indexToDeleteAt), `Delete button for Hero: ${name}`);
      });
    return this;
  }

}

exports.HeroesPage = HeroesPage;
