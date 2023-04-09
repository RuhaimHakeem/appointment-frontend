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
import { FONT } from "../../../constants";

type StyledProps = ColorProps &
  SpaceProps &
  FontWeightProps &
  FlexboxProps &
  TypographyProps &
  BorderProps;

interface TextProps extends StyledProps {}

const SText = styled(RNText)<TextProps>`
  font-size: 16px;
  font-family: ${FONT.regular};

  ${color}
  ${space}
  ${flexbox}
  ${typography}
  ${border}
`;

export const Text = {
  SText,
};
