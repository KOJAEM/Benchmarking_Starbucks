import styled from "@emotion/styled";
import { useState } from "react";
import { BottomItems, DropdownContent, TopMenuItems } from "./index";
export const Navbar = () => {
  const [dropdown, setDropdown] = useState("");
  const title: string[] = [
    "COFFEE",
    "MENU",
    "STORE",
    "RESPONSIBILITY",
    "STARBUCKS REWARDS",
    "WHAT'S NEW",
  ];
  return (
    <Wrapper>
      <Logo src="https://www.starbucks.co.kr/common/img/common/logo.png" />
      <MenuItemWrapper>
        <TopMenuItems />
        <BottomItems
          dropdown={dropdown}
          setDropdown={setDropdown}
          title={title}
        />
      </MenuItemWrapper>
      {title.map((data, index) => (
        <DropdownContent title={data} setDropdown={setDropdown} dropdown={dropdown} key={index}/>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
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
  position: relative;
  display: flex;
  margin-left: 10vw;
  flex-direction: column;
`;
