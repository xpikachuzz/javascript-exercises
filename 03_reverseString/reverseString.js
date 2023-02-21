const reverseString = function (string) {
  let arraySplit = []
  for (let i = 0; i <= string.length - 1; i++) {
    arraySplit.push(string[i])
  }
  let ognirts = ''
  for (let i = arraySplit.length - 1; i >= 0; i--) {
    ognirts += arraySplit[i]
  }
  return ognirts
};

//console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
