const sumAll = function (intervalOne, intervalTwo) {
  if (intervalOne < 0 || intervalTwo < 0 || typeof intervalOne != "number" || typeof intervalTwo != "number") {
    return "ERROR"
  }
  const min = Math.min(intervalOne, intervalTwo)
  const max = Math.max(intervalOne, intervalTwo)
  let sum = 0
  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
};

//console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
