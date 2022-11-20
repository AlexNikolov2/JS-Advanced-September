function solve(input) {
  let operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  let array = [];
  let error = false;
  for (const element of input) {
    if (Number.isInteger(element)) {
      array.push(element);
    } else {
      if (array.length < 2) {
        console.log("Error: not enough operands!");
        error = true;
      }
      let first = array.pop();
      let second = array.pop();
      array.push(operators[element](second, first));
    }
  }
  if (array.length === 1 && error === false) {
    console.log(array[0]);
  } else if (error === false) {
    console.log("Error: too many operands!");
  }
}
solve([15, "/"]);
solve([3, 4, "+"]);
solve([5, 3, 4, "*", "-"]);

solve([7, 33, 8, "-"]);
