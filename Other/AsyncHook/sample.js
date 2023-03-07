const async_hooks = require("async_hooks");

// create a new instance of AsyncHook
const asyncHook = async_hooks.createHook({
  init(asyncId, type) {  //The init function is called when a new asynchronous operation is initiated
    console.log(`init asyncId: ${asyncId} type: ${type}`);
  },
  before(asyncId) {                               //before function is called before the asynchronous operation starts
    console.log(`before asyncId: ${asyncId}`);
  },
  after(asyncId) {                                //after function is called after the asynchronous operation completes
    console.log(`after asyncId: ${asyncId}`);
  },
  destroy(asyncId) {                              //the destroy function is called when the asynchronous operation is destroyed.
    console.log(`destroy asyncId: ${asyncId}`);
  },
});

// enable the hook
asyncHook.enable();

// do some asynchronous work
setTimeout(() => {        //triggers the callbacks
  console.log("setTimeout done");
}, 1000);

// disable the hook
asyncHook.disable();

//By tracking these callbacks, we can gain insights into the performance and behavior of asynchronous operations within our Node.js applications.