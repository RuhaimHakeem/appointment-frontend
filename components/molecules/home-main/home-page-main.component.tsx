import React from "react";
import styled from "styled-components/native";
import { Button, Text } from "../../atoms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/navigation";

const SMidHeader = styled.View`
  justify-content: center;
  align-items: center;
`;

const SWrapper = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export const HomePageMain: React.FC = () => {
  const navigation: HomeScreenNavigationProp = useNavigation();
  return (
    <SWrapper>
      <SMidHeader>
        <Text.SText textAlign="center" fontWeight="600" fontSize={32}>
          {"Welcome! \nRuhaim"}
        </Text.SText>
        <Text.SText mt="8px" color="#8c969b">
          Have a nice day 😊
        </Text.SText>
      </SMidHeader>
      <Button
        onPress={() => navigation.navigate("Appointment")}
        mt="16px"
        backgroundColor="#fd5c63"
      >
        Add a booking
      </Button>
    </SWrapper>
  );
};
