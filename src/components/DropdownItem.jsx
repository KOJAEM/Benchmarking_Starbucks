import styled from "@emotion/styled";
import {
  coffee,
  menu,
  store,
  responsibility,
  starbucksRewards,
  whatsNew,
} from "../dummy/DropdownContents";

export const DropdownItem = ({ name }) => {
  let display;
  if (name === "coffee") display = coffee;
  if (name === "menu") display = menu;
  if (name === "store") display = store;
  if (name === "responsibility") display = responsibility;
  if (name === "starbucksRewards") display = starbucksRewards;
  if (name === "whatsNew") display = whatsNew;

  const getList = index => {
    const amount = display.itemAmount[index];
    const list = [];
    let count = 0;

    for (let i = 0; i < index; i++) {
      count += display.itemAmount[i];
    }

    if (display) {
      for (let j = count; j < count + display.itemAmount[index]; j++) {
        list.push(display.titleItem[j]);
      }
      count += display.itemAmount[amount];
    }
    return (
      <>
        {list.map(data => (
          <Item key={data}>
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
          {display.title.map((data, index) => (
            <Wrapper key={data}>
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
