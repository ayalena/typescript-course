const add3 = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = add3(5, 7, 9, 357);
console.log(addedNumbers);

// with tuple
const add4 = (...numbers: [number, number, number]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers2 = add4(5, 7, 9);
console.log(addedNumbers2);
