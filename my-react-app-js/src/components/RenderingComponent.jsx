import { useEffect, useState } from "react";

export default function RenderingComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("서버에 요청");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        console.log(json);
        // setState 함수는 비동기함수.
        // 1. setUsers(1번유저)
        // 2. setUsers(2번유저) // 1. setUsers(1번유저 + 2번유저)
        setUsers([...users, ...json]);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => {
          console.log(user);
          return <li>{`username:${user.username}, email:${user.email}`}</li>;
        })}
      </ul>
    </div>
  );
}
