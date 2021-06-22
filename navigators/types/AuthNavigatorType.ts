import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

export type AuthNavParamList = {
   Login: undefined;
   Register: undefined;
}

export type AuthNavProps<AuthNavRoutes extends keyof AuthNavParamList> = {
   navigation: StackNavigationProp<AuthNavParamList, AuthNavRoutes>;
   route: RouteProp<AuthNavParamList, AuthNavRoutes>
}
