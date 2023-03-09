const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise Resolved"), 1500);
  });
};

const doSomething = async () => {
  console.log(await doSomethingAsync());
};

console.log("Before");
doSomething();
console.log("After");
