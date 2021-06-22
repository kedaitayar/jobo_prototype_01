import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingNavProps } from "../../navigators/types/SettingNavigatorType";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { useAppSelector } from "../../store/hooks";
import { useChangePasswordMutation } from "../../store/api/users";

export const ChangePasswordScreen: React.FunctionComponent<
   SettingNavProps<"ChangePassword">
> = ({ navigation }) => {
   const { user, userId } = useAppSelector((state) => state.auth);
   const [changePassword, { isLoading, isError, isSuccess, error, data }] =
      useChangePasswordMutation();
   const [password, setPassword] = useState("");
   return (
      <View style={styles.form}>
         <TextInput
            value={password}
            onChangeText={(props) => setPassword(props)}
            label={"password"}
         />
         {!isLoading ? (
            <Button
               mode={"contained"}
               onPress={async () => {
                  if (user && userId) {
                     await changePassword({
                        user: user,
                        userId: userId,
                        password: password,
                     })
                        .unwrap()
                        .then((fulfilled) => {
                           navigation.goBack();
                        })
                        .catch((rejected) => {
                           console.error(rejected);
                        });
                  }
                  // await dispatch(changePassword(password));
                  // navigation.goBack();
               }}
            >
               Change password
            </Button>
         ) : (
            <View>
               <ActivityIndicator />
            </View>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   form: {
      margin: 16,
   },
});
