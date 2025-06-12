import styled from "styled-components";

// 아래는 React 컴포넌트입니다.
const BaseButton = styled.button`
  color: white;
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? "#007bff" : "lightblue")};

  &:hover {
    background-color: #0056b3;
  }
`;

const LargeButton = styled(BaseButton)`
    font-size:20px
    pading:15px 30px
`;

export default function StyledExample() {
  return (
    <div>
      StyledExample
      <BaseButton>클릭</BaseButton>
      <LargeButton>큰버튼</LargeButton>
    </div>
  );
}
