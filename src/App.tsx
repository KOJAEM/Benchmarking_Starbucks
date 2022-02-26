import styled from "@emotion/styled";
import "./App.css";
import { MainVisual } from './components/mainVisual/MainVisual';
import { Navbar } from "./components/navbar/Navbar";


function App() {
  return (
    <Wrapper>
      <Navbar />
      <MainVisual />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
