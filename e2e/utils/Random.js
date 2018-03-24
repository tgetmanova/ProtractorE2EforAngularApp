class Random {

  static getRandomElement(collection) {
    return collection[Random.getRandomInt(collection.length)];
  }

  static getRandomInt(maxExclusive) {
    return Math.floor(Math.random() * Math.floor(maxExclusive));
  }

  static getRandomIntInRange(minInclusive, maxInclusive) {
    return Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive;
  }

  static getRandomAlphanumeric(length) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split("");
    let randomString = "";
    for (let i = 0; i < length; i++) {
      randomString += Random.getRandomElement(alphabet);
    }
    return randomString;
  }

}

exports.Random = Random;
