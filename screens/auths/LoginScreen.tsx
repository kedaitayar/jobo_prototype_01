import React, { useState } from "react";
import {
   KeyboardAvoidingView,
   ScrollView,
   StyleSheet,
   View,
} from "react-native";
import { AuthNavProps } from "../../navigators/types/AuthNavigatorType";
import {
   ActivityIndicator,
   Button,
   HelperText,
   Snackbar,
   TextInput,
} from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../store/hooks";
import { useTranslation } from "react-i18next";
import { InvalidCredentialError } from "../../utils/constants/Errors";
import {verifyUser} from "../../store/api/users";

export const LoginScreen: React.FunctionComponent<AuthNavProps<"Login">> = ({
   navigation,
}) => {
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const { t } = useTranslation();
   const dispatch = useAppDispatch();

   const formik = useFormik({
      initialValues: {
         username: "",
         password: "",
      },
      validationSchema: Yup.object({
         username: Yup.string().required(t("Required")),
         password: Yup.string().required(t("Required")),
      }),
      onSubmit: async (values) => {
         try {
           await dispatch(
               verifyUser({
                  username: values.username,
                  password: values.password,
               })
            );
         } catch (e) {
            if (e.name === InvalidCredentialError.name) {
               setErrorMessage(t("invalid username or password"));
               setIsError(true);
            } else {
               console.error(e);
            }
         }
      },
   });

   return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
         <ScrollView>
            <View style={styles.form}>
               <View>
                  <TextInput
                     label={t("username")}
                     onChangeText={formik.handleChange("username")}
                     onBlur={formik.handleBlur("username")}
                     value={formik.values.username}
                     error={
                        !!(formik.touched.username && formik.errors.username) ||
                        isError
                     }
                  />
                  <HelperText
                     type={"error"}
                     visible={
                        !!(formik.touched.username && formik.errors.username)
                     }
                  >
                     {formik.errors.username}
                  </HelperText>
               </View>
               <View>
                  <TextInput
                     label={t("password")}
                     secureTextEntry={true}
                     onChangeText={formik.handleChange("password")}
                     onBlur={formik.handleBlur("password")}
                     value={formik.values.password}
                     error={
                        !!(formik.touched.password && formik.errors.password) ||
                        isError
                     }
                  />
                  <HelperText
                     type={"error"}
                     visible={
                        !!(formik.touched.password && formik.errors.password)
                     }
                  >
                     {formik.errors.password}
                  </HelperText>
               </View>
               <View>
                  {!formik.isSubmitting ? (
                     <View>
                        <Button
                           mode={"contained"}
                           onPress={formik.handleSubmit}
                        >
                           {t("login")}
                        </Button>
                     </View>
                  ) : (
                     <View>
                        <ActivityIndicator />
                     </View>
                  )}
                  <Button
                     mode={"text"}
                     onPress={() => {
                        navigation.navigate("Register");
                     }}
                  >
                     {t("register")}
                  </Button>
               </View>
            </View>
         </ScrollView>
         <Snackbar
            visible={isError}
            duration={Snackbar.DURATION_SHORT}
            onDismiss={() => {
               setIsError(false);
            }}
         >
            {errorMessage}
         </Snackbar>
      </KeyboardAvoidingView>
   );
};

const styles = StyleSheet.create({
   form: {
      margin: 16,
   },
});
