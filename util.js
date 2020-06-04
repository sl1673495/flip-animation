let preload = (imgs) => {
  return new Promise((resolve, reject) => {
    const length = imgs.length
    let count = 0
    const load = (src) => {
      let img = new Image()
      const checkIfFinished = () => {
        count++
        if (count === length) {
          resolve()
        }
      }

      img.onload = checkIfFinished
      img.onerror = checkIfFinished

      img.src = src
    }
    imgs.forEach(load)
  })
}

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// by ustbhuangyi
let shuffle = (arr) => {
  let ret = arr.slice()
  for (let i = 0; i < ret.length; i++) {
    let j = getRandomInt(0, i)
    let t = ret[i]
    ret[i] = ret[j]
    ret[j] = t
  }
  return ret
}
