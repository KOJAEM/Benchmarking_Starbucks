import styled from "@emotion/styled";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
