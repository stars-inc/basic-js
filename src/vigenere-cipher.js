class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode
  }
   
  encrypt(text, key) {
    if(!text || !key) throw new Error()

    let encrypt = ''

    for(let i = 0; i < text.length; i++) {
      if(text[i] === '') {
        encrypt += text[i]
      } else {
        String.fromCharCode(((text.charCodeAt(i) + key.charCodeAt(i) % 26) + 26))
      }
    }

    return encrypt

  }    
  decrypt(text, key) {
    if(!text || !key) throw new Error()
  }
}

module.exports = VigenereCipheringMachine
