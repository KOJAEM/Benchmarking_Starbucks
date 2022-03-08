import styled from "@emotion/styled";

export function Menu() {
  return (
    <Wrapper>
      <Ul>
        <Li>COMPANY</Li>
        <Li>한눈에 보기</Li>
        <Li>스타벅스 사명</Li>
        <Li>스타벅스 소개</Li>
        <Li>국내 뉴스룸</Li>
        <Li>세계의 스타벅스</Li>
        <Li>글로벌 뉴스룸</Li>
      </Ul>
      <Ul>
        <Li>CORPORATE SALES</Li>
        <Li>단체 및 기업 구매 안내</Li>
      </Ul>
      <Ul>
        <Li>PARTNERSHIP</Li>
        <Li>신규 입점 제의</Li>
        <Li>협력 고객사 등록신청</Li>
      </Ul>
      <Ul>
        <Li>ONLINE COMMUNITY</Li>
        <Li>페이스북</Li>
        <Li>트위터</Li>
        <Li>유튜브</Li>
        <Li>인스타그램</Li>
      </Ul>
      <Ul>
        <Li>RECRUIT</Li>
        <Li>채용 소개</Li>
        <Li>채용 지원하기</Li>
      </Ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  background: url("https://www.starbucks.co.kr/common/img/footer/footer_logo.png")
    no-repeat;
  background-position-x: 90%;
  justify-content: center;
  color: white;
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const Ul = styled.ul`
  width: 220px;
  li:nth-child(1) {
    font-size: 14px;
    line-height: 40px;
  }
`;

const Li = styled.li`
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
