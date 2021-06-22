import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Button} from "react-native-paper";
import {AuthNavProps} from "../../navigators/types/AuthNavigatorType";
import {SettingNavProps} from "../../navigators/types/SettingNavigatorType";

interface SettingScreenProps {}

export const SettingScreen: React.FunctionComponent<SettingNavProps<"Setting">> =
   ({navigation}) => {

   const onSubmitHandler = () => {

   }

      return (
         <View>
            <Button onPress={() => {navigation.navigate("ChangePassword")}}>Change password</Button>
            <Button onPress={onSubmitHandler}>Delete account</Button>
         </View>
      );
   };

const styles = StyleSheet.create({});

