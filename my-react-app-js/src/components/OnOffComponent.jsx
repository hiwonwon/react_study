import React, { useState, useEffect } from "react";

export default function OnOffComponent() {
  const [state, setState] = useState("OFF");

  const toggle = () => {
    console.log(`Toggle is ${state}`);
    setState((prev) => (prev === "OFF" ? "ON" : "OFF"));
  };

  useEffect(() => {
    console.log("호출됩니다");
    //useEffect의 callbackFn의 return value는 함수
    return () => {
      //state가 변화했을 때 useEffect가 다시 실행되기 직전 실행
      console.log("기존함수 호출 종료");
    };
  }, [state]);

  return (
    <div>
      <div>현재 상태: {state}</div>
      <button onClick={toggle}>{state}</button>
    </div>
  );
}
