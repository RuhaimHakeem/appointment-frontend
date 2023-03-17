import styled from "styled-components/native";
import { Text as RNText } from "react-native";
import {
  ColorProps,
  SpaceProps,
  FontWeightProps,
  FlexboxProps,
  TypographyProps,
  BorderProps,
  space,
  color,
  fontWeight,
  flexbox,
  typography,
  border,
} from "styled-system";

type StyledProps = ColorProps &
  SpaceProps &
  FontWeightProps &
  FlexboxProps &
  TypographyProps &
  BorderProps;

interface TextProps extends StyledProps {}

const SText = styled(RNText)<TextProps>`
  font-size: 15px;

  letter-spacing: -0.24px;
  ${color}
  ${space}
  ${fontWeight}
  ${flexbox}
  ${typography}
  ${border}
`;

export const Text = {
  SText,
};
