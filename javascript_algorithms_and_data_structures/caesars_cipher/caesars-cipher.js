function rot13(str) {
  let normalAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let encryptedAlphabet = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
  let strArray = str.split("");
  for (let i = 0; i < strArray.length; ++i) {
    if (strArray[i].match(/[A-Z]/ig) !== null) {
      strArray.splice(i, 1, encryptedAlphabet[normalAlphabet.indexOf(strArray[i])])
    }
    else {
      strArray.splice(i, 1, strArray[i])
    }
  }
  return strArray.join("")

}
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
