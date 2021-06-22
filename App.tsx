import React from "react";
import { StyleSheet } from "react-native";
import "./i18n/config";
import { NavigationContainer } from "@react-navigation/native";
import { DashboardNavigator } from "./navigators/DashboardNavigator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Routes } from "./navigators/Routes";
import { Theme } from "react-native-paper/lib/typescript/types";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme: Theme = {
   ...DefaultTheme,
};

export default function App() {
   return (
      <Provider store={store}>
         <PaperProvider theme={theme}>
            <Routes />
         </PaperProvider>
      </Provider>
   );
}

const styles = StyleSheet.create({});
