import styled from "@emotion/styled";
import "./App.css";
import { MainVisual } from "./components/mainVisual/MainVisual";
import { Navbar } from "./components/navbar/Navbar";
import { LineNotice } from "./components/lineNotice/LineNotice";
import { Rewards } from "./components/rewards/Rewards";
import { MainBean } from "./components/mainBean/MainBean";
import { Reserve } from "./components/reserve/Reserve";
import { Favorites } from "./components/favorites/Favorites";
import { Magazine } from "./components/magazine/Magazine";
import { Store } from "./components/store/Store";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <MainVisual />
      <LineNotice />
      <Rewards />
      <MainBean />
      <Reserve />
      <Favorites />
      <Magazine />
      <Store />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
