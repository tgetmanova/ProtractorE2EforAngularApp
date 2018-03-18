const DEFAULT_WAIT_TIME_INTERVAL = require('.././utils/UtilData').DEFAULT_WAIT_TIME_INTERVAL;

class DashboardPage {

  constructor() {
    this.searchField = element(by.id('search-box'));
    this.searchResultForText = text => element.all(by.cssContainingText('[class="search-result"]', text));
  }

  open() {
    browser.get('/dashboard');
  }

  typeInSearchField(searchRequest) {
    this.searchField.sendKeys(searchRequest);
  }

  selectSearchResultValue(expectedSearchResult) {
    browser.driver.wait(ExpectedConditions.presenceOf(
      element.all(by.className('search-result'))), DEFAULT_WAIT_TIME_INTERVAL);
    this.searchResultForText(expectedSearchResult).click();
  }

}

exports.DashboardPage = DashboardPage;
