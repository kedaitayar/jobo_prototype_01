import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardNavParamList } from "./types/DashboardNavigatorType";
import { DashboardScreen } from "../screens/dashboards/DashboardScreen";

const Stack = createStackNavigator<DashboardNavParamList>();

export const DashboardNavigator: React.FunctionComponent = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name={"Dashboard"} component={DashboardScreen} />
      </Stack.Navigator>
   );
};

const styles = StyleSheet.create({});

