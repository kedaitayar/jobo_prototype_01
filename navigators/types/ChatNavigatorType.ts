import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

export type ChatNavParamList = {
   Chat: undefined;
}

export type ChatNavProps<ChatNavRoutes extends keyof ChatNavParamList> = {
   navigation: StackNavigationProp<ChatNavParamList, ChatNavRoutes>;
   route: RouteProp<ChatNavParamList, ChatNavRoutes>
}
