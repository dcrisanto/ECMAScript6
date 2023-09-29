const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(false){
      resolve('Ohh!!! resolve')
    } else {
      reject('Uppss!!! reject')
    }
  })
}

anotherFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('finally'))
