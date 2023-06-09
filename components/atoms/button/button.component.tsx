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
import { COLORS, FONT } from "../../../constants";

type StyledProps = TypographyProps & SpaceProps & ColorProps & LayoutProps;

interface ButtonStyles {
  bgColor: string;
  borderWidth: string;
}

interface Props extends StyledProps, TouchableOpacityProps {
  buttonStyle: string;
  children: React.ReactNode;
}

const SWrapper = styled(TouchableOpacity)<ButtonStyles>`
  background-color: ${({ bgColor }) => bgColor};
  padding: 8px 16px;
  align-items: center;
  border-radius: 50px;
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
  let borderWidth = "";
  let fontFamily = "";

  switch (buttonStyle) {
    case "primary":
      bgColor = COLORS.primary;
      fontColor = COLORS.white;
      fontFamily = FONT.bold;

      break;

    case "secondary":
      bgColor = COLORS.lightWhite;
      fontColor = COLORS.primary;
      borderWidth = "1px";
      fontFamily = FONT.medium;
      break;

    default:
      break;
  }
  return (
    <SWrapper bgColor={bgColor} borderWidth={borderWidth} {...rest}>
      <Text.SText fontFamily={fontFamily} color={fontColor}>
        {children}
      </Text.SText>
    </SWrapper>
  );
};
