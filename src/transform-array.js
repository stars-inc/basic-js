module.exports = function transform(arr) {
  
  if(!Array.isArray(arr)) throw new Error ('not arr') 

  let result = []
  const length = arr.length

  for (let i = 0; i < length; i++ ) {
    switch (arr[i]) {
      case '--discard-next': i++
        break
      case '--discard-prev':
        if(i !== 0 && arr[i - 2] !== '--discard-next') {
          result.pop()
        }
          break
      case '--double-next':
        if (i < length - 1) {
          result.push(arr[i + 1])
        }
          break
      case '--double-prev':
        if(i !==0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1])
        }
          break
      default: result.push(arr[i])
    }
  }

  return result
}