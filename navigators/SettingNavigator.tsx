import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingNavParamList } from "./types/SettingNavigatorType";
import { SettingScreen } from "../screens/settings/SettingScreen";
import {ChangePasswordScreen} from "../screens/settings/ChangePasswordScreen";

const Stack = createStackNavigator<SettingNavParamList>();

export const SettingNavigator: React.FunctionComponent = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name={"Setting"} component={SettingScreen} />
         <Stack.Screen name={"ChangePassword"} component={ChangePasswordScreen} />
      </Stack.Navigator>
   );
};

const styles = StyleSheet.create({});

