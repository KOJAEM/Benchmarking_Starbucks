import styled from '@emotion/styled';
import './App.css';
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
`
