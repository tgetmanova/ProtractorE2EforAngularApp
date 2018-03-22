const HeroesPage = require('./../pages/HeroesPage').HeroesPage;
const Random = require('./../utils/Random').Random;

class Hero {

  constructor() {
    this.heroName = "";
    this.heroesPage = new HeroesPage();
  }

  withName(name) {
    this.heroName = name;
    return this;
  }

  withRandomName() {
    this.heroName = Random.getRandomAlphanumeric(30);
    return this;
  }

  create() {
    this.heroesPage.open()
      .clickAddHeroButton()
      .typeHeroName(this.heroName)
      .clickSaveButton();
    return this;
  }

  verifyHeroCreated() {
    this.heroesPage.isHeroAdded(this.heroName);
  }

}

exports.Hero = Hero;
