const Random = require('./../utils/Random').Random;

class Hero {

  constructor() {
    this.heroName = '';
  }

  withName(name) {
    this.heroName = name;
    return this;
  }

  getName() {
    return this.heroName;
  }

  withRandomName() {
    this.withName(Random.getRandomAlphanumeric(10));
    return this;
  }

}

exports.Hero = Hero;
