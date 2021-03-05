module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    if(!Array.isArray(arr)) return - 1 
    
    arr.map(item => {
      const flat = this.calculateDepth(item) + 1
      return depth < flat ? depth = flat : - 1
    })
    
    return depth
  }
}