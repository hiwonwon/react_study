/**
 * jsx내에서 js코드 사용법 : {} 사용
 *
 *
 * CSS 적용방법
 * 1. 인라인스타일로 적용 (style 속성)
 *  --> js 객체로 전달해야함 즉 중괄호 사용
 * --> 하이픈으로 연결된 것들은 camleCase로 작성 ex: my-user => myUser
 * 2. 클래스 이름으로 적용 (className속성)
 *  1) css 를 정의 한다.
 *  2) jsx에서 css 를 importgksek.
 *  3) className 속성에 명시한다. (js코드 이기때문에 class 키워드 사용불가)
 */

export default function HelloWorld() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "center",
      }}
    >
      <p style={{ marginBottom: 0, fontWeight: 700, fontSize: "2em" }}>
        Hello, world!
      </p>
      ;
    </div>
  );
}
