import Login from "./Components/Login";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <MainContainer>
      <Login />
    </MainContainer>
  );
}
