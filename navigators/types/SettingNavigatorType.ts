import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

export type SettingNavParamList = {
   Setting: undefined;
   ChangePassword: undefined;
}

export type SettingNavProps<SettingNavRoutes extends keyof SettingNavParamList> = {
   navigation: StackNavigationProp<SettingNavParamList, SettingNavRoutes>;
   route: RouteProp<SettingNavParamList, SettingNavRoutes>
}
