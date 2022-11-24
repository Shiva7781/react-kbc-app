import { useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";

function App() {
  const [questionNumber, setQuestionNumber] = useState(7);

  const moneyPyramid = [
    { no: 1, amount: "₹ 1000" },
    { no: 2, amount: "₹ 2000" },
    { no: 3, amount: "₹ 3000" },
    { no: 4, amount: "₹ 5000" },
    { no: 5, amount: "₹ 10000" },
    { no: 6, amount: "₹ 20000" },
    { no: 7, amount: "₹ 40000" },
    { no: 8, amount: "₹ 80000" },
    { no: 9, amount: "₹ 160000" },
    { no: 10, amount: "₹ 320000" },
    { no: 11, amount: "₹ 640000" },
    { no: 12, amount: "₹ 1250000" },
    { no: 13, amount: "₹ 2500000" },
    { no: 14, amount: "₹ 50000000" },
    { no: 15, amount: "₹ 100000000" },
  ].reverse();

  return (
    <div className="App">
      <div className="Main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia />
        </div>
      </div>
      <div className="Money_pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((money) => (
            <li
              className={
                questionNumber === money.no
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{money.no}</span>
              <span className="moneyListItemAmount">{money.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
