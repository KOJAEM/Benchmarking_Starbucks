import styled from "@emotion/styled";
import {
  coffee,
  menu,
  store,
  responsibility,
  starbucksRewards,
  whatsNew,
} from "../../dummy/DropdownContents";
type Props = {
  name: string;
};
type displayType = {
  title: string[];
  titleItem: string[][];
};
export const DropdownItem = ({ name }: Props) => {
  let display: displayType | null = null;
  switch (name) {
    case "coffee":
      display = coffee;
      break;
    case "menu":
      display = menu;
      break;
    case "store":
      display = store;
      break;
    case "responsibility":
      display = responsibility;
      break;
    case "starbucksRewards":
      display = starbucksRewards;
      break;
    case "whatsNew":
      display = whatsNew;
      break;
    // no default
  }

  const getList = (index: number) => {
    if(!display){
      return;
    }
    return (
      <>
        {display.titleItem[index].map((data: string, index: number) => (
          <Item key={index}>
            <Text>{data}</Text>
          </Item>
        ))}
      </>
    );
  };

  return (
    <>
      {display ? (
        <>
          {display.title.map((data: string, index: number) => (
            <Wrapper key={index}>
              <Title>
                <Text>{data}</Text>
              </Title>
              {getList(index)}
            </Wrapper>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};

const Wrapper = styled.ul`
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
