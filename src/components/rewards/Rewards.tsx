import styled from "@emotion/styled";

export function Rewards() {
  return (
    <Wrapper>
      <ContentsWrapper>
        <LogoWrapper>
          <Logo src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png" />
        </LogoWrapper>
        <Contents>
          <RewardInfo>
            <Title>스타벅스만의 특별한 혜택, 스타벅스 리워드</Title>
            <BottomInfo>
              <h3 style={{ margin: "0 0 " }}>
                스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해보세요.
                <br />
                스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.
              </h3>
              <ButtonsWrapper>
                {/* <button>회원가입</button> */}
                {/* <button>로그인</button> */}
              </ButtonsWrapper>
            </BottomInfo>
          </RewardInfo>
          <GiftInfo>
            <p style={{ fontWeight: "bold", fontSize: "16px", margin: "0" }}>
              회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로
              구매하시고, 편리하게 등록하세요!
              <br /> 카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를
              하시면 무료 음료쿠폰을 드립니다!
            </p>
            {/* <button>e-Gift Card 선물하기</button> */}
          </GiftInfo>
        </Contents>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 40px;
  background-color: #1e3932;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px 20px 40px;
`;

const Logo = styled.img`
  width: 176px;
`;

const Contents = styled.div`
  box-sizing: border-box;
  float: left;
  width: 80%;
  padding-right: 30px;
  color: #fff;
  letter-spacing: 0.5px; // 글자 사이 간격 조절
`;

const RewardInfo = styled.div`
  position: relative;
  margin-bottom: 22px;
  border-bottom: 1px solid #4b615b;
`;

const Title = styled.h2`
  line-height: 1.4;
  margin-bottom: 12px;
  font-size: 26px;
  font-weight: bold;
  margin-top: 0;
`;

const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Comment = styled.h3`
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

// 버튼 보류 (아토믹디자인 쓸거임)

const GiftInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
