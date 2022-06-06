import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { Topic } from '../../types/Topic.type';
type Props = {
  title: string;
  dropdown: string;
};

export const DropdownItem = ({ title, dropdown }: Props) => {
  const titleName = title.replace(/'/gi, "").replace(/ /gi, "").toLowerCase();

  const [display, setDisplay] = useState<Topic>();

  const loadData = useCallback(async () => {
    const { data } = await import(`../../dummy/${titleName}`);
    setDisplay(data);
  }, [titleName]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const getTitleItem = (index: number) => {
    return (
      <>
        {display!.titleItem[index].map((data: string, index: number) => (
          <Item key={index}>
            <Text>{data}</Text>
          </Item>
        ))}
      </>
    );
  };

  return (
    <Wrapper title={title} dropdown={dropdown}>
      <MainWrapper>
        {display &&
          display.title.map((data: string, index: number) => (
            <MainContents key={index}>
              <Title>
                <Text>{data}</Text>
              </Title>
              {getTitleItem(index)}
            </MainContents>
          ))}
      </MainWrapper>
      {display && (
        <SubWrapper>
          <SubContentsWrapper>
            {display.subInfo?.title.map((data: string, index: number) => (
              <SubContents key={index}>
                <SubTitle>{data}</SubTitle>
                <SubText>{display!.subInfo?.titleItem[index]}</SubText>
              </SubContents>
            ))}
          </SubContentsWrapper>
        </SubWrapper>
      )}
    </Wrapper>
  );
};
type WrapperProps = {
  title: string;
  dropdown: string;
};
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: ${({ title, dropdown }) => (title === dropdown ? "100vh" : 0)};
  overflow: hidden;
  transition: max-height 1200ms ease;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 15vw;
`;

const MainContents = styled.ul`
  list-style: none;
  width: 12vw;
`;

const Title = styled.li`
  color: #ffffff;
  font-size: 14px;
  padding-bottom: 1vh;
`;

const Item = styled.li`
  color: #999;
  font-size: 12px;
  padding-bottom: 0.5vh;
`;

const Text = styled.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const SubWrapper = styled.div`
  background: url("	https://www.starbucks.co.kr/common/img/common/gnb_sub_txbg.jpg");
  padding: 12px 0 12px 0;
  width: 100%;
  display: flex;
`;

const SubContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 15vw;
`;

const SubContents = styled.ul`
  list-style: none;
  margin: 0;
`;

const SubTitle = styled.li`
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
  color: #999;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const SubText = styled.li`
  font-size: 12px;
  color: #64a70b;
  float: left;
  width: 100%;
  margin-bottom: 10px;
`;
