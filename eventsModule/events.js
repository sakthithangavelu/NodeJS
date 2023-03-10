const EventEmitter = require("events");

// Create a new event emitter instance
const eventEmitter = new EventEmitter();

// Define a callback function for the 'message' event
const handleMessage = (message) => {
  console.log(`Received message: ${message}`);
};

// Register the callback function for the 'message' event
eventEmitter.on("message", handleMessage);

// Emit a 'message' event
eventEmitter.emit("message", "Hello Sakthivel!");
