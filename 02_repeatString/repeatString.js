const repeatString = function (string, reps) {
  if (reps < 0) {
    return 'ERROR'
  }

  let stringReps = ""
  for (let i = 1; i <= reps; i++) {
    stringReps += string
  }
  return stringReps
};

// Do not edit below this line
module.exports = repeatString;
