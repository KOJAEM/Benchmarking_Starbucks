import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { observe } from "../../function";
import { Button } from "../Atoms";

export function Store() {
  const observerTarget = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    observe({ setShow, observerTarget, replay: true });
  }, []);
  return (
    <Wrapper ref={observerTarget}>
      <Contents>
        <StoreImage1 show={show} />
        <StoreImage2 show={show} />
        <StoreImage3 show={show} />
        <StoreImage4 show={show} />
        <StoreText1 show={show}/>
        <StoreText2 show={show}/>
        <ButtonWrapper show={show}>
          <Button borderColor="black" fontColor="black">
            매장 찾기
          </Button>
        </ButtonWrapper>
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

type AnimationProps = {
  show: boolean;
};
const StoreImage1 = styled.div<AnimationProps>`
  background: url("https://www.starbucks.co.kr/common/img/main/store_exp_img01.png");
  height: 228px;
  left: 390px;
  position: absolute;
  top: 149px;
  width: 228px;
  z-index: 5;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1500ms linear;
`;

const StoreImage2 = styled.div<AnimationProps>`
  background: url("https://www.starbucks.co.kr/common/img/main/store_exp_img02.png");
  height: 312px;
  left: 160px;
  position: absolute;
  top: 0;
  width: 366px;
  z-index: 4;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1500ms linear;
`;

const StoreImage3 = styled.div<AnimationProps>`
  background: url("https://www.starbucks.co.kr/common/img/main/store_exp_img03.png");
  height: 142px;
  left: 520px;
  position: absolute;
  top: -60px;
  width: 343px;
  z-index: 4;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 3000ms ease;
`;

const StoreImage4 = styled.div<AnimationProps>`
  background: url("https://www.starbucks.co.kr/common/img/main/store_exp_img04.png");
  height: 102px;
  position: absolute;
  right: 30px;
  top: 298px;
  width: 230px;
  z-index: 4;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 3000ms ease;
`;

const StoreText1 = styled.div<AnimationProps>`
  background: url("https://www.starbucks.co.kr/common/img/main/store_txt01.png");
  height: 54px;
  position: absolute;
  right: ${({ show }) => (show ? "149px" : "-800px")};
  overflow: hidden;
  top: 100px;
  width: 385px;
  z-index: 4;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 3000ms ease;
`;

const StoreText2 = styled.div<AnimationProps>`
  background: url("https://www.starbucks.co.kr/common/img/main/store_txt02.png");
  height: 61px;
  position: absolute;
  right: ${({ show }) => (show ? "168px" : "-800px")};
  overflow: hidden;
  top: 168px;
  width: 366px;
  z-index: 4;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 3200ms ease;
`;

const ButtonWrapper = styled.div<AnimationProps>`
  position: absolute;
  right: ${({ show }) => (show ? "402px" : "-800px")};
  top: 258px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 3500ms ease;
`;
