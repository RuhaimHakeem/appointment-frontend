import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BookAppointment, HomeScreen } from "../screens";
import { COLORS } from "../constants";

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
        component={BookAppointment}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};
