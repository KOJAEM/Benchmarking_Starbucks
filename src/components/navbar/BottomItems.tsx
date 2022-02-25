import styled from "@emotion/styled";
type Props = {
    setDropdown : React.Dispatch<React.SetStateAction<string>>
}
export function BottomItems({setDropdown}:Props) {
    return (      
    <BottomMenuWrapper>
      <BottomItem
        onMouseOver={() => setDropdown("coffee")}
        onMouseOut={() => setDropdown("")}
      >
        COFFEE
      </BottomItem>
      <BottomItem
        onMouseOver={() => setDropdown("menu")}
        onMouseOut={() => setDropdown("")}
      >
        MENU
      </BottomItem>
      <BottomItem
        onMouseOver={() => setDropdown("store")}
        onMouseOut={() => setDropdown("")}
      >
        STORE
      </BottomItem>
      <BottomItem
        onMouseOver={() => setDropdown("responsibility")}
        onMouseOut={() => setDropdown("")}
      >
        RESPONSIBILITY
      </BottomItem>
      <BottomItem
        onMouseOver={() => setDropdown("starbucksRewards")}
        onMouseOut={() => setDropdown("")}
      >
        STARBUCKS REWARDS
      </BottomItem>
      <BottomItem
        onMouseOver={() => setDropdown("whatsNew")}
        onMouseOut={() => setDropdown("")}
      >
        WHAT'S NEW
      </BottomItem>
    </BottomMenuWrapper>
    )
}


const BottomMenuWrapper = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  list-style: none;
  margin: 0;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const BottomItem = styled.li`
  font-size: 14px;
  padding: 1vh 1.5vw 0 1.5vw;
  height: 100%;
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
