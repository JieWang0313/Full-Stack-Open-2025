import { useState } from "react";

const DisplayButton = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : parseFloat((good / all).toFixed(15)) * 100;

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + " %"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const value = { good: good, bad: bad, neutral: neutral };

  const handleClick = (click_type) => {
    if (click_type === "good") {
      setGood(good + 1);
    } else if (click_type === "neutral") {
      setNeutral(neutral + 1);
    } else if (click_type === "bad") {
      setBad(bad + 1);
    }
  };

  return (
    <div>
      <h1>give feedback</h1>
      <DisplayButton onClick={() => handleClick("good")} text="good" />
      <DisplayButton onClick={() => handleClick("neutral")} text="neutral" />
      <DisplayButton onClick={() => handleClick("bad")} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
