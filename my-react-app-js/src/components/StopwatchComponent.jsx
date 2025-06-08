import { useEffect, useState } from "react";

export default function StopWatchComponent() {
  const [btnText, setBtnText] = useState("Start");
  const [sec, setSec] = useState(0);

  const startStopwatch = () => {
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
        setSec((prevSec) => prevSec + 1);
      }, 1000);

      return () => {
        clearInterval(timeoutId);
      };
    }
  }, [btnText]);

  const reset = () => {
    setSec(0);
  };

  return (
    <div>
      <p>{sec}</p>
      <button onClick={startStopwatch}>{btnText}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
