import React from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const SIconsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Navbar = () => {
  return (
    <SIconsWrapper>
      <FontAwesome5 name="user-alt" size={24} color="black" />
      <Ionicons name="notifications" size={24} color="black" />
    </SIconsWrapper>
  );
};
