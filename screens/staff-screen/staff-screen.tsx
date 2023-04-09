import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { StaffScreenView } from "../../components";

const SWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const StaffScreen = () => {
  return (
    <SWrapper>
      <StaffScreenView />
    </SWrapper>
  );
};
