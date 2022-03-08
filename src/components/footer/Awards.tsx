import styled from "@emotion/styled";
import React from "react";

export function Awards() {
  return (
    <Wrapper>
      <AwardsList>
        <AwardsImage src="https://image.istarbucks.co.kr/common/img/footer/footer_award23.jpg" />
        <AwardsImage src="https://image.istarbucks.co.kr/common/img/footer/footer_award24.jpg" />
        <AwardsImage src="https://image.istarbucks.co.kr/common/img/footer/footer_award25.jpg" />
        <AwardsImage src="https://image.istarbucks.co.kr/common/img/footer/footer_award26.jpg" />
        <AwardsImage src="https://image.istarbucks.co.kr/common/img/footer/footer_award27.jpg" />
        <AwardsImage src="https://image.istarbucks.co.kr/common/img/footer/footer_award28.jpg" />
      </AwardsList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  margin-top: 60px;
  background: #282828;
  padding-top: 20px;
  width: 100%;
`;

const AwardsList = styled.div``;

const AwardsImage = styled.img`
  cursor: pointer;
`;
