import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { observe } from "../../function";
import { Button } from "../Atoms";

export function MainBean() {
  const observerTarget = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    observe({ setShow, observerTarget });
  }, []);
  return (
    <Wrapper ref={observerTarget}>
      <Contents>
        <BeanImage
          src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_bean_1.png"
          alt="bean"
          show={show}
        />
        <Info show={show}>
          <img
            src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_bean_txt_1.png"
            alt="info"
          />
          <ButtonWrapper>
            <Button borderColor="grey" fontColor="grey">
              자세히 보기
            </Button>
          </ButtonWrapper>
        </Info>
      </Contents>
    </Wrapper>
  );
}

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

type AnimationProps = {
  show: boolean;
};
const BeanImage = styled.img<AnimationProps>`
  margin-top: 30px;
  z-index: 10;
  position: relative;
  left: ${({ show }) => (show ? "0" : "-1000px")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 2500ms ease;
`;

const Info = styled.div<AnimationProps>`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: relative;
  left: ${({ show }) => (show ? "0" : "1000px")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 2500ms ease;
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
`;
