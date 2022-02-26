import styled from "@emotion/styled";
import { DropdownItem } from "./DropdownItem";

type Props = {
  dropdown: string;
};
export const DropdownContent = ({ dropdown }: Props) => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <DropdownItem dropdown={dropdown} />
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  background-color: #2c2a29;
  position: absolute;
  top: 120px;
  z-index: 999;
`;
const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 15vw;
`;
