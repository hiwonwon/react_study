import { useState } from "react";

export default function BannedWordPage() {
  const [banWordInput, setBanWordInput] = useState("");
  const [banWords, setBanWords] = useState([]);
  //1. 금지어 입력받아서 배열로 저장
  //1.1 input에 사용자 입력을 받는다
  //1.2 add버튼을 클릭하면 금지어 배열에 추가하여 저장
  //1.3 금지어배열은 반복을 통해 li 태그로 헨더링

  return (
    <div>
      <h3>금지어입력</h3>
      <div>
        <input
          type="text"
          value={banWordInput}
          onChange={(e) => {
            console.log(e.target.value);
            setBanWordInput(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setBanWords([...banWords, banWordInput]);
            setBanWordInput("");
          }}
        >
          입력
        </button>
      </div>
      <ul>
        {banWords.map((banWord) => {
          <li>{banWord}</li>;
        })}
      </ul>
    </div>
  );
}
