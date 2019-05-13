const evaluate = exp => Function(`"use strict";return (${exp})`)();

export const Expression = props => {
  if (props.length) {
    const last = props.trim().slice(-1);
    if (isNaN(Number(last))) {
      let newExpression = props.trim().substring(0, props.length - 1);
      return evaluate(newExpression);
    }
    return evaluate(props);
  }
};
