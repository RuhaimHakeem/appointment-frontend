import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import styled from "styled-components/native";
import { HomeScreenContent, HomeScreenView } from "../../components";

SplashScreen.preventAutoHideAsync();

const SWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SWrapper onLayout={onLayoutRootView}>
      <HomeScreenView />
    </SWrapper>
  );
};
