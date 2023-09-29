const user = {
  userName: 'Dorelly',
  age: 34,
  country: 'Perú'
};

const { userName, ...values } = user;
console.log(values);
