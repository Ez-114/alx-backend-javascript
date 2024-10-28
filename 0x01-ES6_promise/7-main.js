import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';
const chinaSuccess = 'Downloading from China is faster';
const USASuccess = 'Downloading from USA is faster';


const promiseUK = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function (resolve, reject) {
  setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function (resolve, reject) {
  setTimeout(resolve, 200, frSuccess);
});

const promiseChina = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, chinaSuccess);
});

const promiseUSA = new Promise(function(resolve, reject) {
  setTimeout(resolve, 300, USASuccess);
});

const test = async () => {
  console.log(await loadBalancer(promiseUK, promiseFR));
  console.log(await loadBalancer(promiseUKSlow, promiseFR));
  console.log(await loadBalancer(promiseChina, promiseUSA));
}

test();
