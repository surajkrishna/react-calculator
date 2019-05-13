import React, { useState } from "react";
import { Expression } from "./components/EvaluateExpression";
import "./App.css";

function App() {
  let [operation, setOperation] = useState("");
  let [typed, setTyped] = useState("0");
  let [evaluatedExp, setEvaluatedExp] = useState("");

  const numberInput = num => {
    setEvaluatedExp("");
    typed = typed === "0" ? "" : typed;
    setTyped(typed + num);
  };

  const numberOperation = operator => {
    let isOperator = operation.substr(operation.length - 1);
    if (isNaN(Number(isOperator))) {
      operation = operation.trim().substring(0, operation.length - 1);
    }
    operation += typed + operator;
    setOperation(operation);
    const evalExp = Expression(operation);
    setEvaluatedExp((evaluatedExp = evalExp));
    setTyped("");
  };

  const clearTyped = () => {
    setTyped("0");
    setEvaluatedExp("");
  };

  const backSpace = () => {
    typed = typed.slice(0, typed.length - 1);
    typed = typed === "" ? "0" : typed;
    setTyped(typed);
  };

  return (
    <div className="calc-container">
      <div className="calc-body">
        <div className="calc-operation">{operation}</div>
        <div className="calc-typed">{evaluatedExp || typed}</div>
        <div
          className="button c"
          onClick={() => {
            clearTyped();
            setOperation();
          }}
        >
          CE
        </div>
        <div className="button c" onClick={() => setOperation("")}>
          C
        </div>
        <div className="button c" onClick={() => backSpace()}>
          &lt;
        </div>
        <div className="button c" onClick={() => numberOperation("/")}>
          &divide;
        </div>
        <div className="button" onClick={() => numberInput("7")}>
          7
        </div>
        <div className="button" onClick={() => numberInput("8")}>
          8
        </div>
        <div className="button" onClick={() => numberInput("9")}>
          9
        </div>
        <div className="button c" onClick={() => numberOperation("*")}>
          &times;
        </div>
        <div className="button" onClick={() => numberInput("4")}>
          4
        </div>
        <div className="button" onClick={() => numberInput("5")}>
          5
        </div>
        <div className="button" onClick={() => numberInput("6")}>
          6
        </div>
        <div className="button c" onClick={() => numberOperation("-")}>
          &minus;
        </div>
        <div className="button" onClick={() => numberInput("1")}>
          1
        </div>
        <div className="button" onClick={() => numberInput("2")}>
          2
        </div>
        <div className="button" onClick={() => numberInput("3")}>
          3
        </div>
        <div className="button c" onClick={() => numberOperation("+")}>
          &#43;
        </div>
        <div
          className="button c"
          onClick={() => {
            numberInput("0");
          }}
        >
          &plusmn;
        </div>
        <div className="button" onClick={() => numberInput("0")}>
          0
        </div>
        <div className="button c">&sdot;</div>
        <div className="button c">&#61;</div>
      </div>
    </div>
  );
}

export default App;
