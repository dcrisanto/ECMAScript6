function* iterate(array) {
  for(let value of array){
    yield value // yield: palabra reservada que retornará cada uno de los valores del array
  }
}

const it = iterate(['Dorelly', 'Roxana', 'Rosario']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


export function* getId() {
  let iterations = 10;
  while(iterations > 1) {
    yield iterations;
    iterations--
  }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

export function* getId() {
  let lastId = 1;
  while (true) {
    yield lastId++;
  }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
