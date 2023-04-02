import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MakeAppointmentScreen, HomeScreen } from "../screens";

export type RootStackParamList = {
  Home: undefined;
  Appointment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Appointment"
        component={MakeAppointmentScreen}
        options={{
          headerTitle: "Make Appointment",
        }}
      />
    </Stack.Navigator>
  );
};
