import styled from "@emotion/styled";
import { DropdownItem } from "./index";

type Props = {
  title: string;
  setDropdown: React.Dispatch<React.SetStateAction<string>>;
  dropdown : string;
};
export const DropdownContent = ({ title, setDropdown, dropdown }: Props) => {
  return (
    <Wrapper
      onMouseLeave={() => setDropdown("")}
      dropdown={dropdown}
      title={title}
    >
      <DropdownItem title={title} dropdown={dropdown} />
    </Wrapper>
  );
};

type WrapperProps = {
  dropdown : string;
  title: string;
}
const Wrapper = styled.div<WrapperProps>`
  opacity: ${({ dropdown, title }) => (dropdown === title ? 1 : 0)};
  width: 100%;
  background-color: #2c2a29;
  position: absolute;
  top: 120px;
  z-index: 999;
`;
