import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { HomePageMain, Navbar } from "../../components";

const SHeader = styled.View`
  padding: 8px;
  margin: 0 8px;
`;

const SImage = styled.Image`
  position: absolute;
`;

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <SImage source={require("./bg.webp")} />
      <SHeader>
        <Navbar />
        <HomePageMain />
      </SHeader>
    </SafeAreaView>
  );
};
