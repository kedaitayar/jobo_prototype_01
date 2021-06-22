import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

export type DashboardNavParamList = {
   Dashboard: undefined;
}

export type DashboardNavProps<DashboardNavRoutes extends keyof DashboardNavParamList> = {
   navigation: StackNavigationProp<DashboardNavParamList, DashboardNavRoutes>;
   route: RouteProp<DashboardNavParamList, DashboardNavRoutes>
}
