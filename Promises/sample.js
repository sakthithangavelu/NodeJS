let done = false

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const resolved = 'Promise is resolved'
    resolve(resolved)
  } else {
    const rejected = 'Promise is rejected'
    reject(rejected)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

checkIfItsDone()