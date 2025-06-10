import { useState, useCallback } from "react";

export function CallbackExample2() {
  const [state, setState] = useState("");

  const onInputChange = (e) => {
    setState(e.target.value);
  };

  //depArray가 비어있으면 맨처음 랜더링된 상태에서 함수가 재정의 되지 않으므로 state애 빈값만 들어가게됨
  //   const onSubmit = useCallback(() => {
  //     console.log("submit:", state);
  //   }, []);
  const onSubmit = useCallback(() => {
    console.log("submit:", state);
  }, [state]);

  return (
    <div>
      <input type="text" value={state} onChange={onInputChange} />

      <button onClick={onSubmit}>입력</button>
    </div>
  );
}
