const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  if (a < 0 || b < 0) {
    return "ERROR";
  }

  let final = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      final += i;
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      final += i;
    }
  }

  return final;
};

// Do not edit below this line
module.exports = sumAll;
