// arrays destructuring
let fruits = ['apple', 'banana', 'kiwui'];
let [a, b, c] = fruits;
console.log(a,b,fruits[2]);

// object destructuring
let user = {
  userName: 'Dorelly',
  age: 34,
  country: 'Perú'
}

let {userName, age, country} = user;
console.log(userName, age, user.country);

// spread operator
let person = {
  name: 'Dorelly',
  age: 34,
};

let country = 'Perú';
let data = {id:1, ...person, country};
console.log(data);

// rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1,2,3,4,5)

function solution(json1 = { name: "Mr. Michi", food: "Pescado" }, json2 = { age: 12, color: "Blanco" }) {
  let result = { ...json1, ...json2 };
  return result;
};

let result = solution();
console.log(result);


