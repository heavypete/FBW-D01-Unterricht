function exponent(startNumber, exponent) {
  let result = 0;
  const multiplicationResult = startNumber * startNumber;
  for (let i = 0; i < exponent; i++) {
    result += multiplicationResult;
  }
  console.log(result);
}

exponent(2, 2);