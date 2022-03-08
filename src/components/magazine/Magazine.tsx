import styled from "@emotion/styled";

export function Magazine() {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>
          <img
            src="https://image.istarbucks.co.kr/img/event/2022/reserve_text_pc_220120.png"
            alt="title"
          />
        </Title>
        {/* <Button>자세히 보기</Button> */}
      </LeftWrapper>
      <VisualImage>
        <img
          src="https://image.istarbucks.co.kr/img/event/2022/reserve_visual_pc_220119.png"
          alt="visual"
        />
      </VisualImage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 400px;
  background: url("https://image.istarbucks.co.kr/upload/common/img/main/2021/reserve_bg_pc.png")
    no-repeat 50% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div``;

// const Button = styled.button`
//   margin: 0 auto;
//   width: 125px;
//   height: 100%;
//   color: #000;
//   font-size: 15px;
//   line-height: 34px;
//   border: 2px solid #000;
//   border-radius: 5px;
// `;

const VisualImage = styled.div`
  margin-left: 3%;
`;
