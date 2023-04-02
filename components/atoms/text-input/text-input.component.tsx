import { TextInput as Input, TextInputProps } from "react-native";
import React from "react";
import styled from "styled-components";
import { COLORS, FONT } from "../../../constants";
import { SpaceProps, space } from "styled-system";

const STextInput = styled(Input)`
  width: auto;
  padding: 8px;
  font-family: ${FONT.medium} 
  border: 1px solid ${COLORS.primary};
  background-color: ${COLORS.lightWhite}; 
  border-radius: 4px;
  ${space}
`;

interface InputProps extends TextInputProps, SpaceProps {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder: string;
}

export const TextInput: React.FC<InputProps> = ({
  onChangeText,
  value,
  placeholder,
  ...rest
}) => {
  return (
    <STextInput
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  );
};
