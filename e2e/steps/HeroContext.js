const HeroesPage = require('./../pages/HeroesPage').HeroesPage;
const HeroDetailsPage = require('./../pages/HeroDetailsPage').HeroDetailsPage;
const TopNavigation = require('./../pages/TopNavigation').TopNavigation;

const Random = require('./../utils/Random').Random;

class HeroContext {

  constructor() {
    this.heroesList = [];
    this.heroesPage = new HeroesPage();
    this.topNavigation = new TopNavigation();
    this.heroDetailsPage = new HeroDetailsPage();
  }

  withNewHero(hero) {
    this.heroesList.push(hero);
    return this;
  }

  withNewHeroes(heroes) {
    heroes.forEach(hero => this.withNewHero(hero));
    return this;
  }

  getHeroes() {
    return this.heroesList;
  }

  takeRandomHero() {
    return Random.getRandomElement(this.heroesList);
  }

  openHeroesList() {
    this.topNavigation.clickHeroesLink();
    return this;
  }

  createHeroes() {
    this.getHeroes().forEach(hero => this.heroesPage
      .clickAddHeroButton()
      .typeHeroName(hero.getName())
      .clickSaveButton()
      .waitForHeroElementAppears(hero.getName()));
    return this;
  }

  verifyHeroesCreated() {
    this.getHeroes().forEach(hero => this.heroesPage.waitForHeroElementAppears(hero.getName()));
  }

  previewHeroDetails(hero) {
    this.heroesPage.selectHeroElement(hero.getName())
      .isHeroPreviewDisplayed(hero.getName());
  }

  viewHeroDetails(hero) {
    this.heroesPage.selectHeroElement(hero.getName())
      .clickViewDetailsButton();
    return this;
  }

  verifyCorrectHeroDetailsAreDisplayed() {
    this.heroDetailsPage.isHeroDetailIdentifierAsExpected();
  }

  getTheListOfExistingHeroesNames() {
    return this.heroesPage.getHeroTilesTexts();
  }

  deleteHeroAndVerifyItIsDeleted() {
    this.getTheListOfExistingHeroesNames()
      .then(names => {
        let heroNameToDelete = names[0];//TODO Random.getRandomElement(names);
        this.heroesPage.clickDeleteHeroButton(heroNameToDelete);
        return heroNameToDelete;
      })
      .then(deletedHeroName => {
        let updatedHeroesList = this.getTheListOfExistingHeroesNames();
        expect(updatedHeroesList).not.toContain(deletedHeroName);
      });
  }

}

exports.HeroContext = HeroContext;
