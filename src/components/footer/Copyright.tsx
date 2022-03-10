import styled from "@emotion/styled";

export function Copyright() {
  return (
    <Wrapper>
      <TextWrapper>
        <Text style={{ color: "#00b050" }}>개인정보처리방침</Text>
        <Text>영상정보처리기기 운영관리 방침</Text>
        <Text>홈페이지 이용약관</Text>
        <Text>위치정보 이용약관</Text>
        <Text>스타벅스 카드 이용약관</Text>
        <Text>비회원 이용약관</Text>
        <Text>My DT Pass 서비스 이용약관</Text>
        <Text>윤리경영 핫라인</Text>
      </TextWrapper>
      <ButtonWrapper>
        <Button>찾아오시는 길</Button>
        <Button>신규입점제의</Button>
        <Button>사이트 맵</Button>
      </ButtonWrapper>
      <CopyMenu>
        <li>사업자등록번호 : 201-81-21515</li>
        <li>주식회사 에스씨케이컴퍼니 대표이사 : 송 데이비드 호섭</li>
        <li>TEL : 1522-3232</li>
        <li>개인정보 책임자 : 하익성</li>
      </CopyMenu>
      <span style={{ lineHeight: "40px" }}>
        ⓒ 2022 Starbucks Coffee Company. All Rights Reserved.
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #999;
  font-size: 12px;
  line-height: 18px;
  padding-top: 30px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  border-right: 1px solid #393939;
  color: #ccc;
  font-size: 12px;
  padding: 0 8px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

// Atom 버튼 아님
const Button = styled.div`
  background: none;
  border: 2px solid #fff;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  margin: 10px 2px 0 3px;
  width: 90px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const CopyMenu = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 0 5px 0;
  margin: 0 auto;
  text-align: center;
  li {
    list-style: none;
    line-height: 1.3;
    margin: 0 7px;
  }
`;
