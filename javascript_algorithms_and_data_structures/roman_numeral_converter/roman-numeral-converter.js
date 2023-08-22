function convertToRoman(num) {
  let numbersInString = String(num);
  let romanNumberArray = [];
  let zeroIndex = numbersInString[numbersInString.length - 1];
  let firstIndex = numbersInString[numbersInString.length - 2];
  let secondIndex = numbersInString[numbersInString.length - 3];
  let thirdIndex = numbersInString[numbersInString.length - 4];

  if (zeroIndex < 4 && zeroIndex >= 1)
    romanNumberArray.push("I".repeat(zeroIndex))
  if (zeroIndex == 4)
    romanNumberArray.push("IV")
  if (zeroIndex == 5)
    romanNumberArray.push("V")
  if (zeroIndex >= 6 && zeroIndex < 9)
    romanNumberArray.push("V".concat("I".repeat(zeroIndex - 5)))
  if (zeroIndex == 9)
    romanNumberArray.push("IX")
  if (firstIndex >= 1 && firstIndex < 4)
    romanNumberArray.unshift("X".repeat(firstIndex))
  if (firstIndex == 4)
    romanNumberArray.unshift("XL")
  if (firstIndex >= 5 && firstIndex < 9)
    romanNumberArray.unshift("L".concat("X".repeat(firstIndex - 5)))
  if (firstIndex == 9)
    romanNumberArray.unshift("XC")
  if (secondIndex >= 1 && secondIndex < 4)
    romanNumberArray.unshift("C".repeat(secondIndex))
  if (secondIndex == 4)
    romanNumberArray.unshift("CD")
  if (secondIndex >= 5 && secondIndex < 9)
    romanNumberArray.unshift("D".concat("C".repeat(secondIndex - 5)))
  if (secondIndex == 9)
    romanNumberArray.unshift("CM")
  if (thirdIndex >= 1 && thirdIndex < 5)
    romanNumberArray.unshift("M".repeat(thirdIndex))

  return romanNumberArray.join("");
};

console.log(convertToRoman(12));
