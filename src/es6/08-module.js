import { getData } from './module.js';

/* const getGretting = gretting();
console.log(getGretting); */

export function solution() {
  getData()
    .then((movies) => console.log(movies))
    .catch(error => console.log(error))
}

solution();

