class Random {

  static getRandomElement(collection) {
    return collection[Random.getRandomInt(collection.length)];
  }

  static getRandomInt(maxExcluded) {
    return Math.floor(Math.random() * Math.floor(maxExcluded));
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
