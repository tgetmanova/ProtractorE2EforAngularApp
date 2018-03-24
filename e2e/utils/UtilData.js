const Random = require('./../utils/Random').Random;

const Hero = require('../data/Hero').Hero;

class UtilData {

  static generateRandomNumberOfHeroes(min, max) {
    let count = Random.getRandomIntInRange(min, max);
    let heroes = [];
    for (let i = 0; i < count; i++) {
      heroes.push(new Hero().withRandomName());
    }
    return heroes;
  }
}

exports.UtilData = UtilData;
