const evaluate = exp => Function(`"use strict";return (${exp})`)();

export const Expression = props => {
  let expArr = [...props];
  if (expArr.length > 0) {
    if (isNaN(Number(expArr.slice(-1)))) {
      expArr.pop();
    }
    let newExpression = expArr.join("");
    console.log(newExpression);
    return evaluate(newExpression);
  }
};
