import styled from "@emotion/styled";
import { useState } from "react";
import { coffee } from "./../dummy/DropDownContents";

export const DropDown = ({ index }) => {
  return (
    <>
      {index === 0 ? (
        <Wrapper>
          <ContentWrapper>
            <TitleWrapper>
              <Title>
                <Text>{coffee.title1}</Text>
              </Title>
              <Item>
                <Text>{coffee.title1Item1}</Text>
              </Item>
              <Item>
                <Text>{coffee.title1Item2}</Text>
              </Item>
              <Item>
                <Text>{coffee.title1Item3}</Text>
              </Item>
              <Item>
                <Text>{coffee.title1Item4}</Text>
              </Item>
            </TitleWrapper>
            <TitleWrapper>
              <Title>
                <Text>{coffee.title2}</Text>
              </Title>
            </TitleWrapper>
            <TitleWrapper>
              <Title>
                <Text>{coffee.title3}</Text>
              </Title>
              <Item>
                <Text>{coffee.title3Item1}</Text>
              </Item>
            </TitleWrapper>
            <TitleWrapper>
              <Title>
                <Text>{coffee.title4}</Text>
              </Title>
              <Item>
                <Text>{coffee.title4Item1}</Text>
              </Item>
              <Item>
                <Text>{coffee.title4Item2}</Text>
              </Item>
              <Item>
                <Text>{coffee.title4Item3}</Text>
              </Item>
              <Item>
                <Text>{coffee.title4Item4}</Text>
              </Item>
              <Item>
                <Text>{coffee.title4Item5}</Text>
              </Item>
              <Item>
                <Text>{coffee.title4Item6}</Text>
              </Item>
              <Item>
                <Text>{coffee.title4Item7}</Text>
              </Item>
            </TitleWrapper>
            <TitleWrapper>
              <Title>
                <Text>{coffee.title5}</Text>
              </Title>
              <Item>
                <Text>{coffee.title5Item1}</Text>
              </Item>
              <Item>
                <Text>{coffee.title5Item2}</Text>
              </Item>
              <Item>
                <Text>{coffee.title5Item3}</Text>
              </Item>
              <Item>
                <Text>{coffee.title5Item4}</Text>
              </Item>
              <Item>
                <Text>{coffee.title5Item5}</Text>
              </Item>
            </TitleWrapper>
            <TitleWrapper>
              <Title>
                <Text>{coffee.title6}</Text>
              </Title>
              <Item>
                <Text>{coffee.title6Item1}</Text>
              </Item>
              <Item>
                <Text>{coffee.title6Item2}</Text>
              </Item>
              <Item>
                <Text>{coffee.title6Item3}</Text>
              </Item>
              <Item>
                <Text>{coffee.title6Item4}</Text>
              </Item>
              <Item>
                <Text>{coffee.title6Item5}</Text>
              </Item>
            </TitleWrapper>
          </ContentWrapper>
        </Wrapper>
      ) : (
        ""
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #2c2a29;

  // position 과 top 은 실험용 코드
  position: absolute;
  top: 12vh;
`;
const ContentWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`;

const TitleWrapper = styled.ul`
  list-style: none;
  padding: 0;
  width: 11vw;
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

// import styled from "@emotion/styled";
// import { useState } from 'react';
// import { coffee } from "./../dummy/DropDownContents";

// export const DropDown = ({index}) => {
//   return (
//     <>
//     <Wrapper>
//       <ContentWrapper>
//         <TitleWrapper>
//           <Title>
//             <Text>{coffee.title1}</Text>
//           </Title>
//           <Item>
//             <Text>{coffee.title1Item1}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title1Item2}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title1Item3}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title1Item4}</Text>
//           </Item>
//         </TitleWrapper>
//         <TitleWrapper>
//           <Title>
//             <Text>{coffee.title2}</Text>
//           </Title>
//         </TitleWrapper>
//         <TitleWrapper>
//           <Title>
//             <Text>{coffee.title3}</Text>
//           </Title>
//           <Item>
//             <Text>{coffee.title3Item1}</Text>
//           </Item>
//         </TitleWrapper>
//         <TitleWrapper>
//           <Title>
//             <Text>{coffee.title4}</Text>
//           </Title>
//           <Item>
//             <Text>{coffee.title4Item1}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title4Item2}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title4Item3}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title4Item4}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title4Item5}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title4Item6}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title4Item7}</Text>
//           </Item>
//         </TitleWrapper>
//         <TitleWrapper>
//           <Title>
//             <Text>{coffee.title5}</Text>
//           </Title>
//           <Item>
//             <Text>{coffee.title5Item1}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title5Item2}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title5Item3}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title5Item4}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title5Item5}</Text>
//           </Item>
//         </TitleWrapper>
//         <TitleWrapper>
//           <Title>
//             <Text>{coffee.title6}</Text>
//           </Title>
//           <Item>
//             <Text>{coffee.title6Item1}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title6Item2}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title6Item3}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title6Item4}</Text>
//           </Item>
//           <Item>
//             <Text>{coffee.title6Item5}</Text>
//           </Item>
//         </TitleWrapper>
//       </ContentWrapper>
//     </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   background-color: #2c2a29;

//   // position 과 top 은 실험용 코드
//   position: absolute;
//   top: 12vh;
// `;
// const ContentWrapper = styled.div`
//   width: 60%;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const TitleWrapper = styled.ul`
//   list-style: none;
//   padding: 0;
//   width: 11vw;
// `;

// const Title = styled.li`
//   color: #ffffff;
//   font-size: 14px;
//   padding-bottom: 1vh;
// `;

// const Item = styled.li`
//   color: #999;
//   font-size: 12px;
//   padding-bottom: 0.5vh;
// `;

// const Text = styled.span`
//   cursor: pointer;
//   :hover {
//     text-decoration: underline;
//   }
// `;
