import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "./AuthNavigator";
import { useAppSelector } from "../store/hooks";
import { DashboardNavigator } from "./DashboardNavigator";
import {MainTabsNavigator} from "./MainTabsNavigator";

interface RoutesProps {}

export const Routes: React.FunctionComponent<RoutesProps> = () => {
   const user = useAppSelector((state) => state.auth.user);

   return (
      <NavigationContainer>
         {user ? <MainTabsNavigator />:<AuthNavigator />}
      </NavigationContainer>
   );
};

const styles = StyleSheet.create({});

