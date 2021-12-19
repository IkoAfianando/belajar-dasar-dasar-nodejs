class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
    this.result = this.strength;
  }

  growl() {
    console.log(`grrrr!`);
  }

  getResult() {
    console.log(this.result);
  }
}

module.exports = Tiger;
