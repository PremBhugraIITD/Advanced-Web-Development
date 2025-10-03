/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    if (num == 0) {
      throw new Error("Division by zero is not allowed");
    } else {
      this.result /= num;
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    let withoutSpace = "";
    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === " ") {
        continue;
      } else {
        withoutSpace += expression[i];
      }
    }
    for (let i = 0; i < withoutSpace.length; i++) {
      if (
        withoutSpace[i] == "+" ||
        withoutSpace[i] == "-" ||
        withoutSpace[i] == "*" ||
        withoutSpace[i] == "/" ||
        (withoutSpace[i] >= "0" && withoutSpace[i] <= "9") ||
        withoutSpace[i] == "(" ||
        withoutSpace[i] == ")" ||
        withoutSpace[i] == "."
      ) {
        continue;
      } else {
        throw new Error("Invalid character present");
      }
    }
    expression = withoutSpace;
    let validParenthesis = 0;
    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === "(") {
        validParenthesis++;
      } else if (expression[i] === ")") {
        validParenthesis--;
      }
      if (validParenthesis < 0) {
        throw new Error("Invalid parenthesis");
      }
    }
    if (validParenthesis != 0) {
      throw new Error("Invalid parenthesis");
    }
    for (let i = 0; i < expression.length; i++) {
      if (
        i != expression.length - 1 &&
        expression[i] === "(" &&
        expression[i + 1] === ")"
      ) {
        throw new Error("Empty parenthesis");
      }
    }
    const result = eval(expression);
    if (result === Infinity) {
      throw new Error("Division by zero is not allowed");
    } else {
      this.result = result;
    }
  }
}
console.log(new Calculator().calculate("(2.5 + 1.5) * 3"));
module.exports = Calculator;
