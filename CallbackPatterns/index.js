function myName(name) {
  console.log(`Hi ${name}`);
}
function higherOrderFunction(callback) {
    const name = "Sakthi";
    callback(name);
}

higherOrderFunction(myName);