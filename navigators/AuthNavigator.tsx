import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNavParamList } from "./types/AuthNavigatorType";
import { LoginScreen } from "../screens/auths/LoginScreen";
import { RegisterScreen } from "../screens/auths/RegisterScreen";
import {BiometricScreen} from "../screens/auths/BiometricScreen";

const Stack = createStackNavigator<AuthNavParamList>();

export const AuthNavigator: React.FunctionComponent = () => {
   const biometric = true
   let initialRoute: keyof AuthNavParamList = "Login"
   if (biometric) {
      initialRoute = "Biometric"
   }

   return (
      <Stack.Navigator initialRouteName={initialRoute}>
         <Stack.Screen name={"Login"} component={LoginScreen} />
         <Stack.Screen name={"Biometric"} component={BiometricScreen} />
         <Stack.Screen name={"Register"} component={RegisterScreen} />
      </Stack.Navigator>
   );
};


