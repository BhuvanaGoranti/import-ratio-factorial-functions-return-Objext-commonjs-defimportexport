let ratioOfTwoNumbers = require("../ratio/index.js");
let factorialOfNumber = require("../factorial/index.js");
function ratioAndFactorial(a, b, c) {
  let res = {
    ratio: ratioOfTwoNumbers(a, b),
    factorial: factorialOfNumber(c),
  };
  return res;
}
module.exports = ratioAndFactorial;
