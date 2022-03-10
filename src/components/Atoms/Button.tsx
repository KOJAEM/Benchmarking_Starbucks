import styled from "@emotion/styled";
import { ButtonColor, ButtonColorType } from "../../constant/ButtonColor";

type Props = {
  children: string;
  borderColor: keyof ButtonColorType;
  fontColor: keyof ButtonColorType;
  zIndex?: string;
};

export function Button({ children, ...props }: Props) {
  const colorSelection = (color: string) => {
    switch (color) {
      case "white":
        return ButtonColor.white;
      case "green":
        return ButtonColor.green;
      case "brown":
        return ButtonColor.brown;
      case "pink":
        return ButtonColor.pink;
      case "grey":
        return ButtonColor.grey;
      default: // black 
        return ButtonColor.black;
    }
  };

  const selectBorderColor = colorSelection(props.borderColor);
  const selectFontColor = colorSelection(props.fontColor);

  return (
    <Wrapper
      borderColor={selectBorderColor}
      fontColor={selectFontColor}
      zIndex={props.zIndex}
    >{children}</Wrapper>
  );
}
type StyleType = {
  borderColor: string;
  fontColor: string;
  zIndex?: string;
};
const Wrapper = styled.button<StyleType>`
position:relative;
  width: 129px;
  background: transparent;
  color: ${({ fontColor }) => fontColor};
  border: 2px solid ${({ borderColor }) => borderColor};
  font-size: 15px;
  line-height: 34px;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  z-index: ${({zIndex}) => zIndex};
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
  :active {
    transform: scale(0.99);
  }
`;
