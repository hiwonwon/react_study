import { useState, useEffect } from "react";

export default function UserPublicApi() {
  //

  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserArray(data);
      });
  }, []);

  const addUser = ({ username, email }) => {
    //얕은 비교를 하기때문에 아래의 코드로는 ui가 다시 그려지지 않음
    // userArray.push({ username, email });
    // setUserArray(userArray);

    //깊은비교 :개별 값들 모 일일이 비교
    //얕은비교 : 참조값만 비교

    const newUserArray = [...userArray, { username, email }];
    setUserArray(newUserArray);
  };

  return (
    <ul>
      <button
        onClick={() => {
          addUser({ username: "새로운 유저", email: "sample@naver.com" });
        }}
      >
        유저 추가
      </button>
      {userArray.map((user) => {
        return (
          <li>
            {user.username} ({user.email})
          </li>
        );
      })}
    </ul>
  );
}
