"use strict";

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "Wiki\\input.txt";
const input = fs.readFileSync(path).toString().trim();

const makeCPlusPlus = (str) => {
  const newStr = str.split("");
  for (let i = 1; i < newStr.length; i++) {
    if (newStr[i].charCodeAt() >= 65 && newStr[i].charCodeAt() <= 90) {
      newStr[i] = newStr[i].toLowerCase();
      newStr.splice(i, 0, "_");
      i++;
    }
  }
  return newStr.join("");
};

const makeJave = (str) => {
  const newStr = str.split("");
  while (1) {
    const idx = newStr.indexOf("_");
    if (idx === -1) {
      break;
    }
    newStr[idx + 1] = newStr[idx + 1].toUpperCase();
    newStr.splice(idx, 1);
  }
  return newStr.join("");
};

const javaRegex = /^[a-z][a-zA-Z]*$/;
const cppRegex = /^[a-z](?!.*__)[a-z_]*[^_A-Z]$/;

if (javaRegex.test(input)) {
  console.log(makeCPlusPlus(input));
} else if (cppRegex.test(input)) {
  console.log(makeJave(input));
} else {
  console.log("Error!");
}
