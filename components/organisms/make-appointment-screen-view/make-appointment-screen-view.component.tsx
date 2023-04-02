import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { images } from "../../../constants";
import { MakeAppointmentForm } from "../../molecules";

const SImageWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

const SImage = styled.Image`
  width: 300px;
  height: 300px;
`;

export const MakeAppointmentScreenView = () => {
  return (
    <>
      <SImageWrapper>
        <SImage source={images.meeting} />
      </SImageWrapper>
      <MakeAppointmentForm />
    </>
  );
};
