class HeroDetailsPage {
  constructor() {
    this.heroDetailsHeader = element.all(by.css('h2'));
  }

  isHeaderPresent(expectedHeaderText) {
    return this.heroDetailsHeader
      .filter(header => header.getText() === expectedHeaderText)
      .length === 1;
  }
}

exports.HeroDetailsPage = HeroDetailsPage;
