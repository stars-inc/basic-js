class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode
  }
   
  encrypt(text, key) {
    if(!text || !key) throw new Error()

    let alphabet = [], i = 65

    while(i <= 90) { // create alphebet
      alphabet.push(String.fromCodePoint(i))
      i++
    }

    const getCodeFromPhrase = text.toUpperCase().split('').map(char => char.charCodeAt())
    const getCodeFromKey = key.toUpperCase().split('').map(char => char.charCodeAt())
    
    console.log(alphabet, '==========>>>>>')
    console.log(getCodeFromPhrase, 'Phrase CODE')
    console.log(getCodeFromKey, 'KEY CODE')

  }

  decrypt(text, key) {
    if(!text || !key) throw new Error()
  }
}

module.exports = VigenereCipheringMachine
