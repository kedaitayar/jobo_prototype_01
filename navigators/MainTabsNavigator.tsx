import React from "react";
import { StyleSheet } from "react-native";
import { DashboardNavigator } from "./DashboardNavigator";
import { MainTabsNavParamList } from "./types/MainTabsNavigatorType";
import { SettingNavigator } from "./SettingNavigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {ChatNavigator} from "./ChatNavigator";

const Tab = createMaterialBottomTabNavigator<MainTabsNavParamList>();

export const MainTabsNavigator: React.FunctionComponent = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen
            name={"Dashboard"}
            component={DashboardNavigator}
            options={{
               tabBarIcon: ({color}) => (
                  <MaterialIcons name="home-filled" size={24} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name={"Chat"}
            component={ChatNavigator}
            options={{
               tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="chat" size={24} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name={"Setting"}
            component={SettingNavigator}
            options={{
               tabBarIcon: ({color}) => (
                  <MaterialIcons name="settings" size={24} color={color} />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

const styles = StyleSheet.create({});
