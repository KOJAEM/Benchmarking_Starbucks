import styled from '@emotion/styled';
import { Button } from '../Atoms';

export function Reserve() {
    return (
      <Wrapper>
        <Contents>
          <Title>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_title.png"
              alt="title"
            />
            <ButtonWrapper>
              <Button fontColor="brown" borderColor="brown" zIndex="10">
                자세히 보기
              </Button>
            </ButtonWrapper>
          </Title>

          <ReserveVisual>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_visual.jpg"
              alt="visual"
            />
          </ReserveVisual>
        </Contents>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 400px;
  background: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_visual_bg.jpg) no-repeat center top;
  background-size: cover;
  overflow: hidden;
  position: relative;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  position: relative;
  padding-top: 82px;
  max-width: 1080px;
  box-sizing: border-box;
  margin: 0 auto;
  z-index: 10;
`;

const ReserveVisual = styled.div`
  position: absolute;
  right: -5%;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 1800px) {
    right: -12.5%;
  }
  @media screen and (max-width: 1600px) {
    right: -20%;
  }
  @media screen and (max-width: 1400px) {
    right: -28.5%;
  }
  @media screen and (max-width: 1120px) {
    right: -49%;
    bottom: -6%;
  }
  @media screen and (max-width: 980px) {
    right: -62%;
  }
`;

const ButtonWrapper = styled.div`
width: 660px;
  margin-top: 23px;
  display:flex;
  justify-content:center;
`;
