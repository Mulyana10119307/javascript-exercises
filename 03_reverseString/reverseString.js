const reverseString = function (str) {
  const split = str.split("");
  const reverse = split.reverse("");
  const join = reverse.join("");

  return join;
};

// Do not edit below this line
module.exports = reverseString;
