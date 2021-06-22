import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthNavProps} from "../../navigators/types/AuthNavigatorType";
import * as LocalAuthentication from 'expo-local-authentication';
import {Button, Text} from "react-native-paper";

export const BiometricScreen: React.FunctionComponent<AuthNavProps<"Biometric">> = () => {
   const [biometricResult, setBiometricResult] = useState("not authenticate");
   const onBiometricAuthClickHandler = async () => {
      const result = await LocalAuthentication.authenticateAsync()
      console.log(result);
      if (result.success) {
         setBiometricResult("authenticate success")
      } else {
         setBiometricResult(result.error)
      }
   }
   return (
      <View>
         <Text>{biometricResult}</Text>
         <Button onPress={onBiometricAuthClickHandler}>Biometric</Button>
      </View>
   );
};

const styles = StyleSheet.create({});

