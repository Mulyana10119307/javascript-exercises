const fibonacci = function (countArg) {
  let count;
  if (typeof countArg !== "number") {
    count = parseInt(countArg);
  } else {
    count = countArg;
  }

  if (countArg < 0) {
    return "OOPS";
  }

  const fib = [0, 1];
  for (let i = 2; i <= count; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
