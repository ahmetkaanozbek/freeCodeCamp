function palindrome(str) {
  let replacedString = str.replace(/[^a-zA-Z0-9]/g, "")
  let arrayToReverse = replacedString.toLowerCase().split("");
  let reversedArray = []
  for (let i = arrayToReverse.length - 1; i >= 0; --i) {
    reversedArray.push(arrayToReverse[i])
  }
  if (reversedArray.join("") === replacedString.toLowerCase()) {
    return true
  } else {
    return false
  }

}
console.log(palindrome("0_0 (: /-\ :) 0-0"));
