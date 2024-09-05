import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screens/onboarding/FirstScreen";
import LogoScreen from "../screens/LogoScreen";
import SecondScreen from "../screens/onboarding/SecondScreen";
import ThirdScreen from "../screens/onboarding/ThirdScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../auth/Login";
import Registration from "../auth/Registration";


const Stack = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="LogoScreen"
      component={LogoScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="FirstScreen"
      component={FirstScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SecondScreen"
      component={SecondScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ThirdScreen"
      component={ThirdScreen}
      options={{ headerShown: false }}
    />
     <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
          />
           <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
   
  </Stack.Navigator>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
