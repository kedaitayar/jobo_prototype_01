import React from "react";
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
   TextInput,
} from "react-native-paper";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../store/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../store/api/users";

export const RegisterScreen: React.FunctionComponent<AuthNavProps<"Register">> =
   ({ navigation }) => {
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
         onSubmit: async (values, formikHelpers) => {
            try {
               await dispatch(
                  registerUser({
                     username: values.username,
                     password: values.password,
                  })
               );
               formikHelpers.setSubmitting(false);
               navigation.navigate("Login");
            } catch (e) {
               console.error(e);
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
                           !!(formik.touched.username && formik.errors.username)
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
                           !!(formik.touched.password && formik.errors.password)
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
                              {t("register")}
                           </Button>
                        </View>
                     ) : (
                        <View>
                           <ActivityIndicator />
                        </View>
                     )}
                  </View>
               </View>
            </ScrollView>
         </KeyboardAvoidingView>
      );
   };

const styles = StyleSheet.create({
   form: {
      margin: 16,
   },
});
