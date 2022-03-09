import styled from "@emotion/styled";
import { BottomItem } from "./BottomItem";
type Props = {
  dropdown: string;
  setDropdown: React.Dispatch<React.SetStateAction<string>>;
};

const title: string[] = [
  "COFFEE",
  "MENU",
  "STORE",
  "RESPONSIBILITY",
  "STARBUCKS REWARDS",
  "WHAT'S NEW",
];
export function BottomItems({ setDropdown, dropdown }: Props) {
  return (
    <BottomMenuWrapper>
      <BottomItem dropdown={dropdown} setDropdown={setDropdown} title={title} />
    </BottomMenuWrapper>
  );
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

// const BottomItem = styled.li`
//   font-size: 14px;
//   padding: 1vh 1.5vw 0 1.5vw;
//   height: 100%;
//   cursor: pointer;
//   box-sizing: border-box;
//   &.onHover {
//     text-decoration: underline;
//     color: #50995b;
//     background-color: #2c2a29;
//   }
//   border: 0;
//   outline: 0;
//   background: transparent;
// `;
