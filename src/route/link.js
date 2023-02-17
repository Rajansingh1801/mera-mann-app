import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screen/Login";
import Signup from "../Screen/Signup";
import Tabnav from "./tabnav";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Link() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="MainHome"
        component={Tabnav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default Link;
