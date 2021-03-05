module.exports = function countCats(arr) {
  return arr 
    ? arr.flat().filter(el => el === '^^').length
    : 0 
}