const EventEmitter = require("node:events")

class CoffeeShop extends EventEmitter{
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order() {
    this.orderNumber++;
    this.emit("order","choice");
  }

  displayOrderNumber() {
    console.log(`Current order number : ${this.orderNumber}`);
  }
}

module.exports = CoffeeShop