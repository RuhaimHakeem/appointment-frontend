import React from "react";
import styled from "styled-components/native";
import { COLORS } from "../../../constants";
import { Text } from "../text";

const SWrapper = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid black;
  width: 120px;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface Props {
  value: string;
  activeSegment?: string;
  setActiveTab: () => void;
}

export const SegementButton: React.FC<Props> = ({
  value,
  activeSegment,
  setActiveTab,
}) => {
  let fontColor = "";
  let backgroundColor = "";

  if (activeSegment === value) {
    fontColor = "#fff";
    backgroundColor = COLORS.primary;
  } else {
    backgroundColor = COLORS.lightWhite;
  }

  return (
    <SWrapper onPress={setActiveTab} backgroundColor={backgroundColor}>
      <Text.SText color={fontColor}>{value}</Text.SText>
    </SWrapper>
  );
};
