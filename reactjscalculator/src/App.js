import React, { useState } from "react";
import { Expression } from "./components/EvaluateExpression";
import "./App.css";

function App() {
  let [operation, setOperation] = useState([]);
  let [typed, setTyped] = useState("0");
  let [evaluatedExp, setEvaluatedExp] = useState("");
  let [calCache, setCalCache] = useState({});

  const numberInput = num => {
    setEvaluatedExp("");
    typed = typed === "0" ? "" : typed;
    setTyped(typed + num);
  };

  const numberOperation = operator => {
    if (typed) {
      operation.push(typed);
    }
    const lastItem = operation[operation.length - 1] || "";
    const isOperator = !!isNaN(Number(lastItem));
    if (isOperator) {
      operation.pop();
    }
    operation.push(operator);
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

  const addDot = () => {
    if (typed.indexOf(".") === -1) {
      typed = typed.concat(".");
      setTyped(typed);
    }
  };

  const getResult = () => {
    if (typed) {
      operation.push(typed);
    }
    const evalExp = Expression(operation);
    setEvaluatedExp((evaluatedExp = evalExp));
    setTyped("");
  };

  const toggleSign = () => {
    typed = Math.sign(typed) === -1 ? Math.abs(typed) : " ".concat(typed * -1);
    setTyped(typed);
  };

  return (
    <div className="calc-container">
      <div className="calc-body">
        <div className="calc-operation">{operation}</div>
        <div className="calc-typed">{evaluatedExp || typed}</div>
        <div className="button c" onClick={() => clearTyped()}>
          CE
        </div>
        <div
          className="button c"
          onClick={() => {
            clearTyped();
            setOperation([]);
          }}
        >
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
            toggleSign();
          }}
        >
          &plusmn;
        </div>
        <div className="button" onClick={() => numberInput("0")}>
          0
        </div>
        <div className="button c" onClick={() => addDot()}>
          &sdot;
        </div>
        <div className="button c" onClick={() => getResult()}>
          &#61;
        </div>
      </div>
    </div>
  );
}

export default App;
