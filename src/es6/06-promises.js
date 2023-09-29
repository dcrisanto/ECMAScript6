const anotherFuction = () => {
  return new Promise((resolve, reject) => {
    if(false) {
      resolve('Oh!!! resolve');
    } else {
      reject('Upss!!! reject');
    }
  })
}

anotherFuction()
  .then(response => console.log(response))
  .catch(error => console.log(error))
