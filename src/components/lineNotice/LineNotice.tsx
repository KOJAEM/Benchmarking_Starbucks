import styled from "@emotion/styled";

export function LineNotice() {
  return (
    <Wrapper>
      <LeftBackground />
      <RightBackground />
      <ContentsWrapper>
        <LeftContents>
          <LeftTitle>공지사항</LeftTitle>
          <LeftNews>시스템 개선 및 점검 안내</LeftNews>
          <LeftButton src="https://www.starbucks.co.kr/common/img/common/btn_notice_plus.png" />
        </LeftContents>
        <RightWrapper>
          <RightContents>
            <RightTitle>스타벅스 프로모션</RightTitle>
            <RightButton src="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png" />
          </RightContents>
        </RightWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 62px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftBackground = styled.div`
  height: 62px;
  width: 55%;
  background: #111;
  position: absolute;
  left: 0;
`;

const RightBackground = styled.div`
  height: 62px;
  width: 45%;
  background: #f6f5ef;
  position: absolute;
  right: 0;
`;

const ContentsWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

const LeftContents = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 100%;
  color: white;
  box-sizing: border-box;
  z-index: 9;
`;

const LeftTitle = styled.div`
  margin-right: 2%;
  cursor: default;
`;

const LeftNews = styled.div`
  font-size: 14px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;


const LeftButton = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
  position: absolute;
  right: 10px;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  height: 100%;
  color: #312c2c;
  z-index: 9;
`;

const RightContents = styled.div`
    position: relative;
    margin-left: 25%;
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const RightTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const RightButton = styled.img`
    position: absolute;
    left: 100%;
    cursor: pointer;
`;
