import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import {
  SpaceProps,
  TypographyProps,
  space,
  typography,
  ColorProps,
  color,
  layout,
  LayoutProps,
  border,
} from "styled-system";
import { Text } from "../text";
import { COLORS } from "../../../constants";

type StyledProps = TypographyProps & SpaceProps & ColorProps & LayoutProps;

interface ButtonStyles extends StyledProps {
  bgColor: string;
  fontColor: string;
  borderWidth: string;
}

interface Props extends StyledProps, TouchableOpacityProps {
  buttonStyle: string;
  children: React.ReactNode | string;
}

const SWrapper = styled(TouchableOpacity)<ButtonStyles>`
  background-color: ${({ bgColor }) => bgColor};
  padding: 8px 16px;
  align-items: center;
  border-radius: 10px;
  border: ${({ borderWidth }) => borderWidth} solid black;
  width: auto;
  ${space};
  ${typography};
  ${color}
  ${layout}
`;

export const Button: React.FC<Props> = ({ children, buttonStyle, ...rest }) => {
  let bgColor = COLORS.white;
  let fontColor = COLORS.primary;
  let borderWidth: string = "";

  switch (buttonStyle) {
    case "primary":
      bgColor = COLORS.primary;
      fontColor = COLORS.white;
      break;

    case "secondary":
      bgColor = COLORS.lightWhite;
      fontColor = COLORS.primary;
      borderWidth = "1px";
      break;

    default:
      break;
  }
  return (
    <SWrapper
      bgColor={bgColor}
      fontColor={fontColor}
      borderWidth={borderWidth}
      {...rest}
    >
      <Text.SText color={fontColor}>{children}</Text.SText>
    </SWrapper>
  );
};
