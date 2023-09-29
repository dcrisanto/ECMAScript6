const promise1 = new Promise((resolve, reject) => reject("Uppss reject"));
const promise2 = new Promise((resolve, reject) => resolve('Ohhh resolve'));
const promise3 = new Promise((resolve, reject) => resolve('Ohhh! resolve2'))

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));
