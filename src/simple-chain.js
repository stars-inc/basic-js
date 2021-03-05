const chainMaker = {
  initial: [],
  
  getLength() {
    return this.initial.length
  },

  addLink(value) {
    this.initial.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if(position < 1 || position > this.initial.length || !Number.isInteger(position)) {
      this.initial = []
      throw new Error('an error')
    }
    this.initial.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.initial.reverse()
    return this
  },

  finishChain() {
    const result = this.initial.join('~~')
    this.initial.splice(0, this.initial.length)   
    return result
  }
}

module.exports = chainMaker