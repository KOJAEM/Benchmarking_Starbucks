import styled from "@emotion/styled";
import { useState } from "react";
import { BottomItems } from './BottomItems';
import { DropdownContent } from "./DropdownContent";
import { TopMenuItems } from './TopMenuItems';
export const Navbar = () => {
  const [dropdown, setDropdown] = useState("");
  return (
    <Wrapper>
      <Logo src="https://www.starbucks.co.kr/common/img/common/logo.png" />
      <MenuItemWrapper>
        <TopMenuItems />
        <BottomItems setDropdown={setDropdown}/>
      </MenuItemWrapper>
      <DropdownContent dropdown={dropdown} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: #f6f5ef;
  justify-content: center;
  height: 120px;
  z-index: 99;
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


