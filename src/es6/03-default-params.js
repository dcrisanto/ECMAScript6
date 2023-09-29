function newUser(name, age, country) {
  var name = name || 'Dorelly';
  var age = age || 34;
  var country = country || 'Lima';
  console.log(name, age, country);
}

newUser();
newUser('Roxana', 35, 'Lima');

function admin(name = 'Dorelly', age=34, country="Perú") {
  console.log(name, age, country);
}

admin();
admin("Rosario", 34, "Perú");
