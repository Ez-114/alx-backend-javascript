const prom = new Promise(function (resolve, reject) {
  isSuccess = true;
  console.log("starting the async code");
  if (isSuccess) {
    resolve();
  } else {
    reject();
  }
});

prom.then(() => {
  console.log("a7a da eshta8al");
}).catch(() => {
  console.log("ya bdany msht8lsh");
});
