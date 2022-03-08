import styled from "@emotion/styled";

export function Store() {
  return (
    <Wrapper>
      <Contents>
        <StoreImage1 />
        <StoreImage2 />
        <StoreImage3 />
        <StoreImage4 />
        <StoreText1 />
        <StoreText2 />
        {/* <ButtonWrapper>
          <Button>매장 찾기</Button>
        </ButtonWrapper> */}
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/store_bg.jpg");
  height: 400px;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
const Contents = styled.div`
  position: absolute;
  top: 0;
  width: 1280px;
`;

const StoreImage1 = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/store_exp_img01.png");
  height: 228px;
  left: 390px;
  position: absolute;
  top: 149px;
  width: 228px;
  z-index: 5;
`;

const StoreImage2 = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/store_exp_img02.png");
  height: 312px;
  left: 160px;
  position: absolute;
  top: 0;
  width: 366px;
  z-index: 4;
`;

const StoreImage3 = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/store_exp_img03.png");
  height: 142px;
  left: 520px;
  position: absolute;
  top: -60px;
  width: 343px;
  z-index: 4;
`;

const StoreImage4 = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/store_exp_img04.png");
  height: 102px;
  position: absolute;
  right: 30px;
  top: 298px;
  width: 230px;
  z-index: 4;
`;

const StoreText1 = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/store_txt01.png");
  height: 54px;
  position: absolute;
  right: 149px;
  overflow: hidden;
  text-indent: -20000px;
  top: 100px;
  width: 385px;
  z-index: 4;
`;

const StoreText2 = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/store_txt02.png");
  height: 61px;
  position: absolute;
  right: 168px;
  overflow: hidden;
  text-indent: -20000px;
  top: 168px;
  width: 366px;
  z-index: 4;
`;

// const ButtonWrapper = styled.div`
//   border: 2px solid #222;
//   border-radius: 3px;
//   height: 34px;
//   line-height: 34px;
//   position: absolute;
//   right: 402px;
//   top: 258px;
//   width: 121px;
//   z-index: 4;
// `;

// const Button = styled.button`
//   color: #222;
//   display: block;
//   height: 100%;
//   text-align: center;
//   width: 100%;
//   border: none;
//   font-size: 15px;
// `;
