import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

export type MainTabsNavParamList = {
   Dashboard: undefined;
   Chat: undefined;
   Setting: undefined;
}

export type MainTabsNavProps<MainTabsNavRoutes extends keyof MainTabsNavParamList> = {
   navigation: StackNavigationProp<MainTabsNavParamList, MainTabsNavRoutes>;
   route: RouteProp<MainTabsNavParamList, MainTabsNavRoutes>
}
