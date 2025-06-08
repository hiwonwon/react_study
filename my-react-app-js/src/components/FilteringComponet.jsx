import React, { useState, useEffect } from "react";

export default function FilteringComponent() {
  const [inputValue, setInputValue] = useState("");
  const [slangInputValue, setSlangInputValue] = useState("");
  const [slangs, setSlangs] = useState([]);
  const [texts, setTexts] = useState([]);

  const addSlang = () => {
    console.log("금지어 추가");
    setSlangs([...slangs, slangInputValue]);
    //넣어준 후 초기화
    setSlangInputValue("");
  };

  const filter = () => {
    console.log("사용자입력 추가");
    console.log(slangs);
    let tmp = "";
    slangs.forEach((slang) => {
      const filterWord = "*".repeat(slang.length);
      tmp = inputValue.replace(new RegExp(slang, "g"), filterWord);
      console.log(tmp);
    });
    setTexts([...texts, tmp]);

    //초기화
    setInputValue("");
  };

  return (
    <div>
      <p>사용자 입력</p>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={filter}>추가</button>
      <ul>
        {texts.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>

      <p>금지어입력</p>
      <input
        value={slangInputValue}
        onChange={(e) => setSlangInputValue(e.target.value)}
      ></input>
      <button onClick={addSlang}>add</button>
      <ul>
        {slangs.map((slang, idx) => (
          <li key={idx}>{slang}</li>
        ))}
      </ul>
    </div>
  );
}
