let bodyWidth = Number(
  getComputedStyle(document.body).width.replace("px", ""),
)

let halfBodyWidth = bodyWidth / 2

let preload = (imgs) => {
  return new Promise((resolve, reject) => {
    const length = imgs.length
    let count = 0
    const load = (src) => {
      console.log('src: ', src);
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

let sum = (nums) => nums.reduce((a, b) => a + b, 0)

let omitByIndexes = (arr, omitIndexes) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!omitIndexes.includes(i)) {
      res.push(i)
    }
  }
  return res
}