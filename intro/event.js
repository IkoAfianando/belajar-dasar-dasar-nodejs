const { EventEmitter } = require("events");
const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

// fungsi yang akan dijlankan pada event kedua
const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on("coffee-order", makeCoffee);
// myEventEmitter.on("coffee-order", makeBill);

//pemanggilan dengan handler atau listener
const orderCoffeListener = ({ name, price }) => {
  makeCoffee({ name });
  makeBill({ price });
};

myEventEmitter.on("coffee-order", orderCoffeListener);

//memicu event coffee-order terjadi
myEventEmitter.emit("coffee-order", { name: "Latte", price: 15000 });
