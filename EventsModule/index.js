//Event driven programming

const CoffeeShop = require("../EventsModule/coffeeShop")

const coffeeShop = new CoffeeShop();

coffeeShop.on("order",(choice)=>{
    console.log(`Order recieved! Making ${choice} coffee`);
})

coffeeShop.order("Cold");
coffeeShop.displayOrderNumber();



































// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-coffee",(choice) => {//event listeners
//     console.log(`Order Recieved.!! Making ${choice} Coffee for you..!!`);
// })

// emitter.on("order-coffee",(choice)=>{
//     if(choice=="Cold"){
//         console.log("Here is your cold coffee..!");
//     }
// })

// emitter.emit("order-coffee","Cold");

