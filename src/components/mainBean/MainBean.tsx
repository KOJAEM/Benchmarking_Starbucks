import styled from '@emotion/styled';

export function MainBean() {
    return (
      <Wrapper>
        <Contents>
          <BeanImage src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_bean_1.png" />
          <Info>
            <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_bean_txt_1.png" />
            {/* <Button>자세히 보기</Button> */}
          </Info>
        </Contents>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 572px;
  background: #f9e8ee
    url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_bean_bg_1.jpg)
    center center no-repeat;
  background-size: cover;
`;

const Contents = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  ::before,
  ::after {
    position: absolute;
    bottom: 0;
    display: block;
    background-position: center top;
    background-repeat: no-repeat;
    content: "";
  }
  ::before {
    left: 0;
    width: 520px;
    height: 573px;
    background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_bean_left_bg_1.png);
  }
  ::after {
    right: 0;
    width: 511px;
    height: 573px;
    background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_bean_right_bg_1.png);
  }
`;

const BeanImage = styled.img`
  margin-top: 30px;
  z-index: 10;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

// const Button = styled.button`
//     width: 125px;
//     margin-top: 39px;
//     height: 38px;
// `;