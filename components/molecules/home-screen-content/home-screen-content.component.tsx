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

const SImage = styled.Image`
  height: 300px;
  width: 300px;
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
      <View>
        <SImage source={images.doctor} />
      </View>
      <SStaffBtnWrapper>
        <Button buttonStyle="primary" onPress={() => {}} mt="16px">
          CONTINUE AS STAFF
        </Button>
      </SStaffBtnWrapper>
      <SPatientBtnWrapper>
        <Button
          buttonStyle="secondary"
          onPress={() => navigation.navigate("Appointment")}
          mt="16px"
        >
          CONTINUE AS PATIENT
        </Button>
      </SPatientBtnWrapper>
    </SWrapper>
  );
};
