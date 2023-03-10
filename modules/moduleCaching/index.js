const tech = require("../moduleCaching/technology");

const newTech = new tech("Angular");
console.log(newTech.getName());
newTech.setName("React");
console.log(newTech.getName());


const newTech2 = new tech("Node.Js")
console.log(newTech2.getName());