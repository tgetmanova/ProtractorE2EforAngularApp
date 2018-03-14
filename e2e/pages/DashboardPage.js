class DashboardPage {

  constructor() {
    this.searchField = element(by.id('search-box'));
    this.searchResultValues = element.all(by.className('search-result'));
  }

  open() {
    browser.get('/dashboard');
  }

  typeInSearchField(searchRequest) {
    this.searchField.sendKeys(searchRequest);
  }

  selectSearchResultValue(expectedSearchResult) {
    let targetSearchResult = this.searchResultValues
      .filter(result => result.getText() === expectedSearchResult);
    if (targetSearchResult.length !== 1) {
      throw new Error('No expected search results found ' +
        'or more than one the same result returned for: ' + expectedSearchResult);
    }

    targetSearchResult.get(0).click();
  }
}

exports.DashboardPage = DashboardPage;
