import { useEffect, useState } from "react";

export default function TimerComponent() {
  const [time, setTime] = useState(10);
  const [btnText, setBtnText] = useState("Start");
  //   const[(inputValue, setInputValue)] = useState("");

  const startTimer = () => {
    if (btnText === "Stop") {
      setBtnText("Start");
    } else {
      setBtnText("Stop");
    }
  };
  useEffect(() => {
    if (btnText === "Stop") {
      const timeoutId = setInterval(() => {
        console.log("실행중");
        //   setSec(sec + 1);
        setTime((prevSec) => prevSec - 1);
      }, 1000);

      return () => {
        clearInterval(timeoutId);
      };
    }
  }, [btnText]);
  useEffect(() => {
    if (time === 0) {
      setBtnText("Start");
    }
  }, [time]);

  return (
    <div>
      {/* <input> </input> */}
      <button onClick={startTimer}>{btnText}</button>
      <p>{time}</p>
    </div>
  );
}
