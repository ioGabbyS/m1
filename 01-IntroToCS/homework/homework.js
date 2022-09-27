'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 // num.toString(2);
  let sum = 0;
    for (let i = 0; i < num.length; i++) {
       sum += +num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}


function DecimalABinario(num) {
  // tu codigo aca
  let a = [];
  while (num >=2){
    a.unshift(num %2);
    num = Math.floor(num / 2);
}
a.unshift(num);
a = a.join("");
return a
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}