import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { images } from "../../../constants";
import { RootStackParamList } from "../../../navigation/navigation";
import { Button } from "../../atoms";

const SWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const SStaffBtnWrapper = styled.View``;

const SPatientBtnWrapper = styled.View``;

type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

type NavigationProp = HomeScreenNavigationProp["navigation"];

export const HomeScreenContent: React.FC = () => {
  const navigation: NavigationProp = useNavigation();
  return (
    <SWrapper>
      <SStaffBtnWrapper>
        <Button
          buttonStyle="primary"
          onPress={() => navigation.navigate("Appointments")}
          mt="16px"
        >
          CONTINUE AS STAFF
        </Button>
      </SStaffBtnWrapper>
      <SPatientBtnWrapper>
        <Button
          buttonStyle="secondary"
          onPress={() => navigation.navigate("MakeAppointment")}
          mt="16px"
        >
          CONTINUE AS PATIENT
        </Button>
      </SPatientBtnWrapper>
    </SWrapper>
  );
};
