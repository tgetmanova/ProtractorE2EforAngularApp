const HeroesPage = require('./../pages/HeroesPage').HeroesPage;
const TopNavigation = require('./../pages/TopNavigation').TopNavigation;

const Random = require('./../utils/Random').Random;

class HeroContext {

  constructor() {
    this.heroesList = [];
    this.heroesPage = new HeroesPage();
    this.topNavigation = new TopNavigation();
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
      .clickSaveButton());

    return this;
  }

  verifyHeroesCreated() {
    this.getHeroes().forEach(hero => this.heroesPage.waitForHeroElementAppears(hero.getName()));
  }

  previewHeroDetails(hero) {
    let heroName = hero.getName();
    this.heroesPage.waitForHeroElementAppears(heroName)
      .selectHeroElement(heroName)
      .isHeroPreviewDisplayed(heroName);
  }

}

exports.HeroContext = HeroContext;
