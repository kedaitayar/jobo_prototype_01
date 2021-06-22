import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNavParamList } from "./types/AuthNavigatorType";
import { LoginScreen } from "../screens/auths/LoginScreen";
import { RegisterScreen } from "../screens/auths/RegisterScreen";

const Stack = createStackNavigator<AuthNavParamList>();

export const AuthNavigator: React.FunctionComponent = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name={"Login"} component={LoginScreen} />
         <Stack.Screen name={"Register"} component={RegisterScreen} />
      </Stack.Navigator>
   );
};


