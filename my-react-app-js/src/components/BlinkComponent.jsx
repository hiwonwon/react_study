import React, { useEffect, useState } from "react";

export default function BlinkCompnent({ text }) {
  const [showText, setShowText] = useState(true);
  const [count, setCount] = useState(0);

  //component 만들어질 때 딱 한번 호출 되는 코드
  useEffect(() => {
    const timeoutId = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return <div>{showText ? text : null}</div>;
}
