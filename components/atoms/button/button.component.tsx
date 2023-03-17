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
} from "styled-system";
import { Text } from "../text";

type StyledProps = TypographyProps & SpaceProps & ColorProps & LayoutProps;

interface Props extends StyledProps, TouchableOpacityProps {
  children: React.ReactNode | string;
}

const SWrapper = styled(TouchableOpacity)<Props>`
  background-color: #237af9;
  padding: 8px 16px;
  align-items: center;
  border-radius: 10px;
  ${space};
  ${typography};
  ${color}
  ${layout}
`;

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <SWrapper {...rest}>
      <Text.SText color="white" fontFamily="Inter-Regular">
        {children}
      </Text.SText>
    </SWrapper>
  );
};
