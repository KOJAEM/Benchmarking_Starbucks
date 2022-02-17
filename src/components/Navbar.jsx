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
`;

const MenubarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2vh 20vw;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: space-around;
`;

const TopMenuItems = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 10vw;
  width: 82%;
`;

const BottomMenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10vw;
  width: 80%;
`;

const TopItem = styled.div`
  padding: 0 1vw;
  font-size: 12px;
  margin-bottom: 1vh;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const SearchImg = styled.img`
  padding: 0 1vw;
  cursor: pointer;
  margin-bottom: 1vh;
`;

const BottomItem = styled.button`
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 20px;
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
