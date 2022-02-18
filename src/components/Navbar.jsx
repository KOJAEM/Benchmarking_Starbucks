import styled from "@emotion/styled";
export const Navbar = () => {
  return (
    <Wrapper>
      <MenubarWrapper>
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
            <BottomItem>COFFEE</BottomItem>
            <BottomItem>MENU</BottomItem>
            <BottomItem>STORE</BottomItem>
            <BottomItem>RESPONSIBILITY</BottomItem>
            <BottomItem>STARBUCKS REWARDS</BottomItem>
            <BottomItem>WHAT'S NEW</BottomItem>
          </BottomMenuItems>
        </MenuItemWrapper>
      </MenubarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f6f5ef;
  justify-content: space-between;
`;

const MenubarWrapper = styled.div`
  display: flex;
  justify-content: center;
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
    background-color: #46474d;
  }
  border: 0;
  outline: 0;
  background: transparent;
`;
