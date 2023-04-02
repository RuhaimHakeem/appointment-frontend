import React from "react";
import styled from "styled-components/native";
import {
  MakeAppointmentForm,
  MakeAppointmentScreenView,
} from "../../components";

const SWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const MakeAppointmentScreen = () => {
  return (
    <SWrapper>
      <MakeAppointmentScreenView />
    </SWrapper>
  );
};
