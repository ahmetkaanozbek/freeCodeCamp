function telephoneCheck(str) {
  let check = str.split("");
  if (check[3] == "-" && check[7] == "-" && check.length == 12)
    return true;
  else if (check[0] == 1 && check[1] == " " && check[5] == "-" && check[9] == "-" && check.length == 14)
    return true;
  else if (check[0] == "(" && check[4] == ")" && check[8] == "-" && check.length == 13)
    return true;
  else if (check[0] == 1 && check[1] == "(" && check[5] == ")" && check[9] == "-" && check.length == 14)
    return true;
  else if (check[0] == "(" && check[4] == ")" && check[5] == " " && check[9] == "-" && check.length == 14)
    return true;
  else if (check[0] == 1 && check[1] == " " && check[2] == "(" && check[6] == ")" && check[7] == " " && check[11] == "-" && check.length == 16)
    return true;
  else if (check.length == 10)
    return true;
  else if (check[0] == 1 && check[1] == " " && check.length == 10)
    return true;
  else if (check[3] == " " && check[7] == " " && check.length == 12)
    return true;
  else if (check[0] == 1 && check[1] == " " && check[5] == " " && check[9] == " " && check.length == 14)
    return true;
  else
    return false;
}

console.log(telephoneCheck("1 555 555 5555"));