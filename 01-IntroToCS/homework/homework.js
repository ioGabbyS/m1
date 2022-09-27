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
  parseInt("111", 2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}