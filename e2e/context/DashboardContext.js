const DashboardPage = require('./../pages/DashboardPage').DashboardPage;
const HeroDetailsPage = require('./../pages/HeroDetailsPage').HeroDetailsPage;
const TopNavigation = require('./../pages/TopNavigation').TopNavigation;

const Reporting = require('./../utils/ReportUtils').ReportUtils;

class DashboardContext {

  constructor() {
    this.dashboardPage = new DashboardPage();
    this.heroDetailsPage = new HeroDetailsPage();
    this.topNavigation = new TopNavigation();
  }

  openFromTopNavigation() {
    this.topNavigation.clickDashboardLink();
    return this;
  }

  searchForHero(heroName) {
    this.dashboardPage.typeInSearchField(heroName);
    return this;
  }

  verifyCurrentSearchResults(expectedSearchResults, notExpectedSearchResults) {
    Reporting.addStep('Verifying Search results');
    this.dashboardPage.getSearchResultsTexts()
      .then(actualSearchResults => {
        Reporting.attachText('Current Search results', actualSearchResults.join(', '))
        expect(actualSearchResults.length).toEqual(expectedSearchResults.length);
        return actualSearchResults;
      })
      .then(actualSearchResults => {
        expectedSearchResults
          .map(hero => hero.getName())
          .forEach(heroName => {
            Reporting.addStep(`Expecting [${heroName}] to be present in [${actualSearchResults.join(', ')}]`,
              () => expect(actualSearchResults).toContain(heroName));
          });
        return actualSearchResults;
      })
      .then(actualSearchResults => {
        notExpectedSearchResults
          .map(hero => hero.getName())
          .forEach(heroName => {
            Reporting.addStep(`Expecting [${heroName}] NOT to be present in [${actualSearchResults.join(', ')}]`,
              () => expect(actualSearchResults).not.toContain(heroName));
          });
      });
    return this;
  }

  selectSearchResult(heroName) {
    this.dashboardPage.selectSearchResultValue(heroName);
    return this;
  }

  getTopHeroesNames() {
    return this.dashboardPage.getTopHeroTilesTexts();
  }

  openTopHeroDetails(heroName) {
    this.dashboardPage.clickTopHeroTileByText(heroName);
  }

}

exports.DashboardContext = DashboardContext;
