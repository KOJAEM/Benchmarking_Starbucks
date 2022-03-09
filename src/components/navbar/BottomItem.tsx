import styled from '@emotion/styled';
import React from 'react';
type Props = {
  title: string[];
  dropdown: string;
  setDropdown: React.Dispatch<React.SetStateAction<string>>;
};
export function BottomItem({title, dropdown, setDropdown}:Props) {
    return (
      <>
        {title.map((data: string, index: number) => (
          <Wrapper
            onMouseOver={() => setDropdown(data)}
            className={dropdown === data ? "onHover" : ""}
            key={index}
          >{data}</Wrapper>
        ))}
      </>
    );
}


const Wrapper = styled.div`
  font-size: 14px;
  padding: 1vh 1.5vw 0 1.5vw;
  height: 100%;
  cursor: pointer;
  box-sizing: border-box;
  &.onHover {
    text-decoration: underline;
    color: #50995b;
    background-color: #2c2a29;
  }
  border: 0;
  outline: 0;
  background: transparent;
`;