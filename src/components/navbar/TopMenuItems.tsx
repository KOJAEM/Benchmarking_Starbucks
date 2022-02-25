import styled from "@emotion/styled";

export function TopMenuItems() {
  return (
    <TopMenuWrapper>
      <TopItem>Sign in</TopItem>
      <TopItem>My Starbucks</TopItem>
      <TopItem>Customer Service & Ideas</TopItem>
      <TopItem>Find a Store</TopItem>
      <SearchImg src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"></SearchImg>
    </TopMenuWrapper>
  );
}

const TopMenuWrapper = styled.ul`
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
