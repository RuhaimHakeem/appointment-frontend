import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { images } from "../../../constants";
import { HomeScreenContent } from "../../molecules";

const SImage = styled.Image`
  height: 300px;
  width: 300px;
`;

export const HomeScreenView = () => {
  return (
    <>
      <SImage source={images.doctor} />
      <HomeScreenContent />
    </>
  );
};
