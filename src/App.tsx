import styled from "@emotion/styled";
import "./App.css";
import { MainVisual } from './components/mainVisual/MainVisual';
import { Navbar } from "./components/navbar/Navbar";
import { LineNotice } from './components/lineNotice/LineNotice';
import { Rewards } from './components/rewards/Rewards';


function App() {
  return (
    <Wrapper>
      <Navbar />
      <MainVisual />
      <LineNotice />
      <Rewards />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
