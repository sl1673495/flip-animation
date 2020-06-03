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