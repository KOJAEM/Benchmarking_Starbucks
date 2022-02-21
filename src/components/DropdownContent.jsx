import styled from "@emotion/styled";
import { DropdownItem } from './DropdownItem';

export const DropdownContent = ({ dropdown }) => {
  return (
    <>
        <Wrapper>
          <ContentWrapper>
            <DropdownItem name={dropdown}/>
          </ContentWrapper>
        </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #2c2a29;
  // position 과 top 은 실험용 코드
  position: absolute;
  top: 120px;
`;
const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 15vw;
`;


