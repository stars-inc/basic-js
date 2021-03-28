class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }
   
  encrypt(text, key) {
    if(!text || !key) throw new Error()
    let alphabet = [], i = 65, result = [], y = 0

    while(i <= 90) {
      alphabet.push(String.fromCodePoint(i))
      i++
    }

    const store = [text, key].map(char => char.toUpperCase().split(''))
    const t = store[0], k = store[1] // destructurisation not allowed ;/

    for(let i = 0; i < t.length; i++) {
      if(alphabet.indexOf(t[i] < 0)) result.push(t[i])

      let check = Math.abs(alphabet.indexOf(t[i]) + alphabet.indexOf(k[y]))

      y++
      if(check > alphabet.length) check = y 
      
      result.push(alphabet[check])
    }

    return !this.type ? result.join('') : result.reverse().join('')
  }

  decrypt(text, key) {
    if(!text || !key) throw new Error()
  }
}

module.exports = VigenereCipheringMachine
