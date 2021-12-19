class FizzBuzz {
  constructor(name) {
    this.name = name;
    this.data = [];
  }

  getLoop(num) {
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.data.push("FizzBuzz");
      } else if (i % 3 === 0) {
        this.data.push("Fizz");
      } else if (i % 5 === 0) {
        this.data.push("Buzz");
      } else {
        this.data.push(i);
      }
    }
    return this.data;
  }
}

const fizzBuzz = new FizzBuzz("Iko Afianando");
console.log(fizzBuzz.getLoop(100));
