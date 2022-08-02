//import { greeting } from "./module.js";

function newFunction(name, age, country){
    var name = name || 'Oscar';
    var age = age || '31';
    var country = country || 'Sullana';
    console.log(name, age, country);
}

// es6
function newFunction2(name='Oscar', age='31', country='Sullana'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Roberto', '23', 'Colombia');

// template literal
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilínea
let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet \n" + "consectetur, adipisci velit... There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...";
console.log(lorem);

//es6
let lorem2 =`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
consectetur, adipisci velit... There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...
`;
console.log(lorem2);

// Destructuración
let person = {
    name: 'Dorelly',
    age: '31',
    country: 'Sullana'
}

console.log(person.name, person.age, person.country);

//es6
let { name, age, country } = person;
console.log(name, age, country);

// Operador de propagación: es6
let team1 = ['Oscar', 'Juliam', 'Fabian'];
let team2 = ['Valeria', 'Jessica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

// variables: disponible en forma global
var hola = 'hola';
let holaLet = 'holaLet';
console.log(holaLet);
// let: sólo disponible en el scope, en el bloque de código que será llamado: es6
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
 
//var
var a = 'b';
a = 'a';
console.log(a);

//es6 const: asignar variable sin reasignar
const ax = 'b';
//a = 'a'; // no found reasignar

// objectos
const completName = 'Dorelly Crisanto';
const ageUser = '33';

//es5
var obj = {
    completName,
    ageUser
}

console.log(obj);
//es6
const obj2 = { name, age };

console.log(obj2);

//es6: arrow functions
const names = [
    {
        name: 'Dorelly',
        age: '31',
        country: 'Sullana'
    },
    {
        name: 'Roxana',
        age: '32',
        country: 'Piura'
    }
]
//es5
let listOfNames = names.map(function(item){ //objeto+método+función_anónima(elemento)
    console.log(item.name);
});
//es6
let listOfNames2 =names.map(item=>{ //establecemos el elemento que necesitamos y que retornará algo
    console.log(item.name);
})

const listOfNames3 = (name, age, country) => {
   console.log('arrow function recibiendo parámetros');
};

const listOfNames4 = name => {
    console.log('arrow function recibiendo un sólo parámetro');
};

const square = num => num*num;

console.log(square(4));

// Promise: algo va a pasar
const helloPromise = () => {
    return new Promise((resolve, reject) => { // la promesa va a resolver o va hacer rechazada
        if(true){
            resolve('Hey!')
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response)) //obtener la respuesta
    .then(()=> console.log('hola')) //podemos anidar varios elementos then
    .catch(error => console.log(error)) //obtener el error

    const cows = 15;

    const countCows =  () => {
        return new Promise((resolve, reject) => {
            if(cows>10){
                resolve(`We have ${cows} cows on the farm`)
            } else {
                reject("There is no cows on the farm")
            }
        })
    }

    countCows()
        .then(response => console.log(response))
        .catch(error => console.log(error))

/**Clases, Módulos y Generadores */

class calculator {
    constructor({number1, number2}) {
        this.number1 = number1;
        this.number2 = number2;
    }
    add() {
        const result = this.number1 + this.number2;
        return result;
    }
}

const operator1 = new calculator({
    number1: 20,
    number2: 30
})

//greeting();

//Generators


function* helloWorld() {
    if(true) {
        yield 'Hello Dorelly';
    }

    if(true) {
        yield 'World'
    }
}


const generatorsHello = helloWorld();
console.log(generatorsHello.next().value);
console.log(generatorsHello.next().value);
console.log(generatorsHello.next().value);

/*ES7 */

const numberList = [1, 13, 5, 7, 9, 76];

const includeNumber = numberList => {
    if(numberList.includes(3)) {
        console.log('El array incluye el número 3');
    } else {
        console.warn('El array debe incluir el número 3');
    }
};

includeNumber(numberList);

const base = 4;
const exponent = 2;
const result = base**exponent;