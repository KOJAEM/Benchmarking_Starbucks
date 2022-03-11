import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { observe } from "../../function";
import { Button } from "../Atoms";

export function Magazine() {
  const observerTarget = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    observe({ setShow, observerTarget });
  }, []);
  return (
    <Wrapper ref={observerTarget}>
      <LeftWrapper>
        <Title>
          <img
            src="https://image.istarbucks.co.kr/img/event/2022/reserve_text_pc_220120.png"
            alt="title"
          />
        </Title>
        <ButtonWrapper>
          <Button borderColor="black" fontColor="black">
            자세히 보기
          </Button>
        </ButtonWrapper>
      </LeftWrapper>
      <VisualImage show={show}>
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

const ButtonWrapper = styled.div`
  margin: 0 auto;
`;

type AnimationProps = {
  show: boolean;
};
const VisualImage = styled.div<AnimationProps>`
  margin-left: 3%;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 2000ms ease;
`;
