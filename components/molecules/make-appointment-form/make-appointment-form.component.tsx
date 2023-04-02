import React, { useState } from "react";
import styled from "styled-components/native";
import { Button, TextInput, DateInput, Text } from "../../atoms";
import { Formik, useFormik, ErrorMessage } from "formik";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { AppointmentSchema } from "../../../validation/validation";
import { Text as Do } from "react-native";

const SWrapper = styled.View`
  margin-horizontal: 8px;
`;

const SInputsWrapper = styled.View``;

const STextInputWrapper = styled.View`
  margin-top: 16px;
`;

interface FormValues {
  name: string;
  date: Date;
  email: string;
  mobile: string;
}

export const MakeAppointmentForm = () => {
  const [date, setDate] = useState<Date>(new Date());

  const initialValues: FormValues = {
    name: "",
    date: date,
    email: "",
    mobile: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AppointmentSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleDateChange = (
    event: DateTimePickerEvent,
    setFieldValue: any,
    selectedDate?: Date
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
      setFieldValue("date", selectedDate);
    }
  };

  const submitHandler = () => {
    formik.handleSubmit();
  };

  return (
    <SWrapper>
      <SInputsWrapper>
        <STextInputWrapper>
          {formik.touched.name && formik.errors.name && (
            <Text.SText mb="4px" color="red">
              {formik.errors.name}
            </Text.SText>
          )}
          <TextInput
            placeholder="Name"
            onChangeText={formik.handleChange("name")}
            value={formik.values.name}
            onBlur={() => formik.setFieldTouched("name")}
          />
        </STextInputWrapper>

        <STextInputWrapper>
          {formik.touched.date && formik.errors.date && (
            <Text.SText mb="4px" color="red">
              Please Provide a Proper Date
            </Text.SText>
          )}
          <DateInput
            value={formik.values.date}
            is24Hour={true}
            mode="date"
            display="default"
            onChange={(event: DateTimePickerEvent, selectedDate?: Date) =>
              handleDateChange(event, formik.setFieldValue, selectedDate)
            }
            style={{
              height: 28,
              flex: 1,
            }}
          />
        </STextInputWrapper>

        <STextInputWrapper>
          {formik.touched.email && formik.errors.email && (
            <Text.SText mb="4px" color="red">
              {formik.errors.email}
            </Text.SText>
          )}
          <TextInput
            placeholder="Email"
            onChangeText={formik.handleChange("email")}
            value={formik.values.email}
            onBlur={() => formik.setFieldTouched("email")}
          />
        </STextInputWrapper>

        <STextInputWrapper>
          {formik.touched.mobile && formik.errors.mobile && (
            <Text.SText mb="4px" color="red">
              {formik.errors.mobile}
            </Text.SText>
          )}
          <TextInput
            placeholder="Mobile"
            onChangeText={formik.handleChange("mobile")}
            value={formik.values.mobile}
            onBlur={() => formik.setFieldTouched("mobile")}
          />
        </STextInputWrapper>

        <Button mt="16px" buttonStyle="primary" onPress={submitHandler}>
          Make Appointment
        </Button>
      </SInputsWrapper>
    </SWrapper>
  );
};
