import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTimer(timer + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer, timerOn]);
  return (
    <div className="wrapper">
      <h2>Timer</h2>
      <div className="time">
        <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((timer / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && timer === 0 && (
          <button className="buttons" onClick={() => setTimerOn(true)}>
            Start
          </button>
        )}
        {timerOn && (
          <button className="buttons" onClick={() => setTimerOn(false)}>
            Stop
          </button>
        )}
        {!timerOn && timer > 0 && (
          <button className="buttons" onClick={() => setTimerOn(true)}>
            Resume
          </button>
        )}
        {!timerOn && timer > 0 && (
          <button className="buttons" onClick={() => setTimer(0)}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
