// declarando
class User {}
// instancia de una clase
const newUser = new User();

class user {
  // métodos
  greeting() {
    return 'Hello!!!'
  }
}

const gnx = new user();
console.log(gnx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor
class user {
  constructor(){
    console.log('new user');
  }
  greeting() {
    return 'Hello!!!'
  }
}

const dorelly = new user();
console.log(dorelly.greeting());

// this
class user {
  constructor(name){
    this.name = name;
  }
  // métodos
  speak() {
    return 'Hello !'
  }
  greeting() {
    return `${this.speak()} ${this.name}`
  }
};

const dorelly = new user('Dorelly');
console.log(dorelly.greeting());

// setters and getters
class user {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  // métodos
  speak(){
    return 'Hello!!!'
  }
  greeting(){
    return `${this.speak()} ${this.name}`
  }
  get uAge() {
    return this.age;
  }
  set uAge(age) {
    this.age = age;
  }
}

const bebeloper = new user('Dorelly', 34);
console.log(bebeloper.greeting());
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 33);

