import DateTimePicker from "@react-native-community/datetimepicker";
import {
  IOSNativeProps,
  AndroidNativeProps,
} from "@react-native-community/datetimepicker";
import { Text } from "../../atoms/text";
import React from "react";

import { COLORS, FONT } from "../../../constants";
import styled from "styled-components/native";

const SDateWrapper = styled.View`
  padding: 5px;
  align-items: center;
  font-family: ${FONT.medium} 
  border: 1px solid ${COLORS.primary};
  background-color: ${COLORS.lightWhite}; 
  border-radius: 4px;
  flex-direction: row;
`;

export const DateInput: React.FC<IOSNativeProps | AndroidNativeProps> = ({
  ...rest
}) => {
  return (
    <SDateWrapper>
      <Text.SText color={COLORS.gray2}>Date</Text.SText>
      <DateTimePicker {...rest} />
    </SDateWrapper>
  );
};
