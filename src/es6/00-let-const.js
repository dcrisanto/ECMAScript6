var lastName = "Dorelly";
lastName = "Roxana";

console.log(lastName);

let fruit = "apple";
fruit = "kwui";
console.log(fruit);

const animal = "dog";
animal = "cat"; // no reasignar variable const
console.log(animal);

const fruits = () => {
  if(true){
    var fruit1 = "apple"; // function scope: existe de forma global, dentro de la función vamos a acceder a la variable
    let fruit2 = "kiwui"; // block scope: sólo es accedida dentro del bloque que es declarada
    const fruit3 = "banana"; // block scope: sólo es accedida dentro del bloque que es declarada
  }
  console.log(fruit1);
  console.log(fruit2); // sólo es accedida
  console.log(fruit3);
}

fruits();


