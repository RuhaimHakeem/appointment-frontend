import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MakeAppointmentScreen, HomeScreen, StaffScreen } from "../screens";

export type RootStackParamList = {
  Home: undefined;
  MakeAppointment: undefined;
  Appointments: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="MakeAppointment"
        component={MakeAppointmentScreen}
        options={{
          headerTitle: "Make Appointment",
        }}
      />
      <Stack.Screen name="Appointments" component={StaffScreen} />
    </Stack.Navigator>
  );
};
