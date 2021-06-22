import React from "react";
import { StyleSheet, View } from "react-native";
import {Text} from "react-native-paper";

interface DashboardScreenProps {}

export const DashboardScreen: React.FunctionComponent<DashboardScreenProps> =
   () => {
      return <View><Text>dashboard screen</Text></View>;
   };

const styles = StyleSheet.create({});
