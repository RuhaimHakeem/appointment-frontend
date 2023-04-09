import React from "react";
import { Button, Text } from "../../atoms";
import styled from "styled-components/native";
import { COLORS, FONT } from "../../../constants";
import Icon from "react-native-vector-icons/Ionicons";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../../shared";

const SWrapper = styled.View`
  border-radius: 50px;
  margin: 16px;
  background-color: #fff;
  height: ${DEVICE_HEIGHT / 2.5}px;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  shadow-color: #171717;
  shadow-offset: 0px 8px;
`;

const SCardHeader = styled.View`
  background-color: ${COLORS.primary};
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  padding: 32px;
`;

const SDateWrapper = styled.View`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const SCardMain = styled.View`
  padding-horizontal: 32px;
  padding-top: 24px;
  gap: 10px;
`;

const SPatientInfoView = styled.View`
  justify-content: center;
  gap: 8px;
`;

const SPatientInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  gap: 8px;
  margin-top: 16px;
`;

export const Card = () => {
  const date = new Date();
  return (
    <SWrapper>
      <SCardHeader>
        <Text.SText fontSize="15px" color={COLORS.gray2}>
          Appointment Request
        </Text.SText>
        <SDateWrapper>
          <Icon name="time" size={28} color="#fff" />
          <Text.SText ml="8px" color={COLORS.lightWhite} fontFamily={FONT.bold}>
            {date.toLocaleDateString()}, {date.toLocaleTimeString()}
          </Text.SText>
        </SDateWrapper>
      </SCardHeader>
      <SCardMain>
        <SPatientInfoView>
          <SPatientInfo>
            <Text.SText fontSize="14px" fontFamily={FONT.bold}>
              Name:
            </Text.SText>
            <Text.SText fontSize="14px" fontFamily={FONT.regular}>
              Muntha
            </Text.SText>
          </SPatientInfo>

          <SPatientInfo>
            <Text.SText fontSize="14px" fontFamily={FONT.bold}>
              Mobile:
            </Text.SText>
            <Text.SText fontSize="14px" fontFamily={FONT.regular}>
              0779122185
            </Text.SText>
          </SPatientInfo>

          <SPatientInfo>
            <Text.SText fontSize="14px" fontFamily={FONT.bold}>
              Email:
            </Text.SText>
            <Text.SText fontSize="14px" fontFamily={FONT.regular}>
              muntha@gmail.com
            </Text.SText>
          </SPatientInfo>

          <SPatientInfo>
            <Text.SText fontSize="14px" fontFamily={FONT.bold}>
              Duration:
            </Text.SText>
            <Text.SText fontSize="14px" fontFamily={FONT.regular}>
              1-5
            </Text.SText>
          </SPatientInfo>
        </SPatientInfoView>
        <SButtonsWrapper>
          <Button width="50%" buttonStyle="primary">
            Confirm
          </Button>
          <Button width="50%" buttonStyle="secondart">
            Decline
          </Button>
        </SButtonsWrapper>
      </SCardMain>
    </SWrapper>
  );
};
