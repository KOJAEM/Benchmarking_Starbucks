import styled from "@emotion/styled";
import { DropdownItem } from "./index";

type Props = {
  dropdown: string;
  setDropdown: React.Dispatch<React.SetStateAction<string>>;
};
export const DropdownContent = ({ dropdown, setDropdown }: Props) => {
  return (
    <Wrapper onMouseLeave={() => setDropdown("")}>
      <DropdownItem dropdown={dropdown} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #2c2a29;
  position: absolute;
  top: 120px;
  z-index: 999;
`;
