// object literals
function newUser(user, age, country, uId) {
  return {
    user, 
    age, 
    country,
    id: uId
  }
}

console.log(newUser('dcrisanto', 34, 'Perú', 1));
