import React, { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleEvaluate = () => {
    try {
      setResult(eval(input)); // Evaluate the expression when "=" is pressed
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Calculator</h1>
        <div className="calculator">
          <div className="input-display">
            <input type="text" value={input} readOnly />
            <div className="result">
              {result !== null ? <p>Result: {result}</p> : null}
            </div>
          </div>
          <div className="button-container">
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick(".")}>.</button>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleEvaluate}>=</button> {/* Now "=" performs the operation */}
            <button onClick={() => handleButtonClick("/")}>/</button> {/* "/" is now a regular button */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
