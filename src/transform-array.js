module.exports = function transform(arr) {
  const comands = ['--discard-prev', '--double-prev', '--double-next', '--discard-next']
  if(!Array.isArray(arr)) throw new Error('not arr')
  if(!arr.includes(comands)) return []
  
  return
}