const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true) ? setTimeout(() => {
      resolve('Async!!!')
    }, 1000) : reject(new Error('error'))
  })
}

const anotherFn = async () => {
  const somenting = await fnAsync();
  console.log(somenting);
  console.log('hello!!!');
}

console.log('Before');
anotherFn();
console.log('After');
