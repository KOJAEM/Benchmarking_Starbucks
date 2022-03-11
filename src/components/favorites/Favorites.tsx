import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { observe } from "../../function";
import { Button } from "../Atoms";
export function Favorites() {
  const observerTarget = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    observe({ setShow, observerTarget, replay: true, threshold: 0.3});
  }, []);
  return (
    <Wrapper ref={observerTarget}>
      <LeftWrapper>
        <Slogan1 show={show}></Slogan1>
        <Slogan2 show={show}></Slogan2>
        <ButtonWrapper show={show}>
          <Button fontColor="white" borderColor="white">
            자세히 보기
          </Button>
        </ButtonWrapper>
      </LeftWrapper>
      <ImageWrapper>
        <FavoriteImage
          src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_pick_img.png"
          alt="favorites"
        />
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

type AnimationProps = {
  show: boolean;
};
const Slogan1 = styled.div<AnimationProps>`
  background: url("https://www.starbucks.co.kr/common/img/main/fav_prod_txt01.png");
  height: 204px;
  overflow: hidden;
  width: 258px;
  z-index: 7;
  position: relative;
  left: ${({ show }) => (show ? "0" : "-1000px")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 3s ease;
`;
const Slogan2 = styled.div<AnimationProps>`
  background: url("https://www.starbucks.co.kr/common/img/main/fav_prod_txt02.png");
  height: 156px;
  overflow: hidden;
  width: 362px;
  z-index: 7;
  margin-top: 46px;
  position: relative;
  left: ${({ show }) => (show ? "0" : "-1000px")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 3500ms ease;
`;

const ButtonWrapper = styled.div<AnimationProps>`
  margin-top: 44px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 3s ease;
`;

const ImageWrapper = styled.div`
  margin-top: 100px;
  margin-right: 15%;
`;

const FavoriteImage = styled.img`
  width: 672px;
  height: 458px;
`;
