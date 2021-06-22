import React from "react";
import { ChatNavParamList } from "./types/ChatNavigatorType";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatScreen } from "../screens/chat/ChatScreen";

const Stack = createStackNavigator<ChatNavParamList>();

export const ChatNavigator: React.FunctionComponent = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name={"Chat"} component={ChatScreen} />
      </Stack.Navigator>
   );
};
