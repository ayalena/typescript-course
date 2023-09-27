function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

console.log(printResult(add(5, 12)));

let someValue: undefined;

function printUndefinedResult(num: number): undefined {
  console.log("Result: " + num);
  return;
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(9, 9));

function addAndHandle(
  n1: number,
  n2: number,
  callBackFunction: (num: number) => void
) {
  const result = n1 + n2;
  callBackFunction(result);
}

addAndHandle(9, 11, (result) => {
  console.log(result);
});
