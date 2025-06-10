import { use, useEffect, useState } from "react";

export default function TimerComponent() {
  const [time, setTime] = useState();
  const [btnText, setBtnText] = useState("Start");
  const [inputValue, setInputValue] = useState();

  const startTimer = () => {
    if (btnText === "Stop") {
      setBtnText("Start");
    } else {
      setBtnText("Stop");
    }
  };
  useEffect(() => {
    if (btnText === "Stop") {
      setTime(inputValue);
      const timeoutId = setInterval(() => {
        console.log("실행중");
        //   setSec(sec + 1);
        setTime((prevSec) => prevSec - 1);
      }, 1000);
      return () => {
        clearInterval(timeoutId);
      };
    } else {
      setTime(0);
    }
  }, [btnText]);
  useEffect(() => {
    if (time === 0) {
      setBtnText("Start");
      alert("타이머종료");
    }
  }, [time]);

  return (
    <div>
      <h2>Timer</h2>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={startTimer}>{btnText}</button>
      <p>{time}</p>
    </div>
  );
}
