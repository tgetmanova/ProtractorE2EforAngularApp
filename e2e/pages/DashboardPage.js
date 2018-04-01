const BasePage = require('.././pages/BasePage').BasePage;

class DashboardPage extends BasePage {

  constructor() {
    super();
    this.searchField = element(by.id('search-box'));
    this.searchResults = element.all(by.css('[class="search-result"]'));
    this.searchResultForText = text => element.all(by.cssContainingText('[class="search-result"]', text));
    this.topHeroTiles = element.all(by.css('[class="module hero"]'));
    this.topHeroTile = text => element(by.cssContainingText('[class="module hero"]', text));
  }

  open() {
    browser.get('/dashboard');
  }

  typeInSearchField(searchRequest) {
    super.enterTextIntoTextField(this.searchField, searchRequest, 'Search for Hero text field');
  }

  getSearchResultsTexts() {
    super.waitForCondition(ExpectedConditions.presenceOf(element.all(by.className('search-result'))),
      'Some search results are derived');
    return this.searchResults.map(result => result.getText());
  }

  selectSearchResultValue(expectedSearchResult) {
    super.waitForCondition(ExpectedConditions.presenceOf(element.all(by.className('search-result'))),
      'Some search results are derived');
    super.clickTheElement(this.searchResultForText(expectedSearchResult),
      'Search result that appears under search field');
  }

  getTopHeroTilesTexts() {
    return this.topHeroTiles.map(tile => tile.getText());
  }

  clickTopHeroTileByText(text) {
    super.clickTheElement(this.topHeroTile(text), `Top Hero Tile for ${text}`);
  }

}

exports.DashboardPage = DashboardPage;
