const HeroesPage = require('./../pages/HeroesPage').HeroesPage;

class Hero {

  constructor(name) {
    this.heroName = name;
    this.heroesPage = new HeroesPage();
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
