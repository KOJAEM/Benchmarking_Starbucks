import styled from "@emotion/styled";
import { useState } from "react";
import { DropDown } from "./DropdownContent";
export const Navbar = () => {
  const [display, setDisplay] = useState("");
  return (
    <Wrapper>
      <Logo src="https://www.starbucks.co.kr/common/img/common/logo.png" />
      <MenuItemWrapper>
        <TopMenuItems>
          <TopItem>Sign in</TopItem>
          <TopItem>My Starbucks</TopItem>
          <TopItem>Customer Service & Ideas</TopItem>
          <TopItem>Find a Store</TopItem>
          <SearchImg src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"></SearchImg>
        </TopMenuItems>
        <BottomMenuItems>
          <BottomItem
            onMouseOver={() => setDisplay(0)}
            onMouseOut={() => setDisplay("")}
          >
            COFFEE
          </BottomItem>
          <BottomItem
            onMouseOver={() => setDisplay(1)}
            onMouseOut={() => setDisplay("")}
          >
            MENU
          </BottomItem>
          <BottomItem
            onMouseOver={() => setDisplay(2)}
            onMouseOut={() => setDisplay("")}
          >
            STORE
          </BottomItem>
          <BottomItem
            onMouseOver={() => setDisplay(3)}
            onMouseOut={() => setDisplay("")}
          >
            RESPONSIBILITY
          </BottomItem>
          <BottomItem
            onMouseOver={() => setDisplay(4)}
            onMouseOut={() => setDisplay("")}
          >
            STARBUCKS REWARDS
          </BottomItem>
          <BottomItem
            onMouseOver={() => setDisplay(5)}
            onMouseOut={() => setDisplay("")}
          >
            WHAT'S NEW
          </BottomItem>
        </BottomMenuItems>
      </MenuItemWrapper>
      <DropDown index={display}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: #f6f5ef;
  justify-content: center;
  height: 12vh;
`;

const Logo = styled.img`
  cursor: pointer;
  object-fit: none;
  margin-left: 1vw;
`;

const MenuItemWrapper = styled.nav`
  display: flex;
  margin-left: 10vw;
  flex-direction: column;
`;

const TopMenuItems = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  justify-content: flex-end;
  align-items: center;
  margin: 1vh 3vw 1vh 0;
`;

const TopItem = styled.li`
  padding: 0 1vw;
  font-size: 12px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const SearchImg = styled.img`
  padding: 5px 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
`;

const BottomMenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const BottomItem = styled.li`
  font-size: 14px;
  padding: 1vh 1.5vw 4vh 1.5vw;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #50995b;
    background-color: #2c2a29;
  }
  border: 0;
  outline: 0;
  background: transparent;
`;
