import styled from "@emotion/styled";
import { Awards } from "./Awards";
import { Copyright } from "./Copyright";
import { Menu } from "./Menu";

export function Footer() {
  return (
    <Wrapper>
      <Menu />
      <Awards />
      <Copyright />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 32px 0 35px 0;
  background: #2c2a29;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
