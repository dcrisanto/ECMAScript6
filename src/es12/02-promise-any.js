const promise1 = new Promise((resolve, reject) => reject('Uppss!!! reject'));
const promise2 = new Promise((resolve, reject) => resolve('Ohhh!!! resolve2'));
const promise3 = new Promise((resolve, reject) => resolve('Ohhh!!! resolve'));

// retornar la primera que resuelva de forma satisfactoria
Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response))
