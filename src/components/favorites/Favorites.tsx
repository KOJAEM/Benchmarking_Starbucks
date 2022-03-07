import styled from "@emotion/styled";

export function Favorites() {
  return (
    <Wrapper>
      <LeftWrapper>
        <Slogan1></Slogan1>
        <Slogan2></Slogan2>
        {/* <Button>자세히 보기</Button> */}
      </LeftWrapper>
      <ImageWrapper>
        <FavoriteImage src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_pick_img.png" alt='favorites'/>
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg");
  height: 800px;
  display: flex;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 120px;
  align-items: flex-end;
`;

const Slogan1 = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/fav_prod_txt01.png");
  height: 204px;
  overflow: hidden;
  width: 258px;
  z-index: 7;
`;
const Slogan2 = styled.div`
  background: url("https://www.starbucks.co.kr/common/img/main/fav_prod_txt02.png");
  height: 156px;
  overflow: hidden;
  width: 362px;
  z-index: 7;
  margin-top: 46px;
`;

const Button = styled.button`
  margin-top: 44px;
  width: 125px;
  height: 38px;
`;

const ImageWrapper = styled.div`
  margin-top: 100px;
  margin-right: 15%;
`;


const FavoriteImage = styled.img`
  width: 672px;
  height: 458px;
`;