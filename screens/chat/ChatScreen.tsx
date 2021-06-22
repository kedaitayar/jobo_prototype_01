import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

interface ChatScreenProps {}

export const ChatScreen: React.FunctionComponent<ChatScreenProps> = () => {
   const [messages, setMessages] = useState<IMessage[]>([]);

   useEffect(() => {
      setMessages([
         {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
               _id: 2,
               name: 'React Native',
               avatar: 'https://placeimg.com/140/140/any',
            },
         },
      ])
   }, [])

   const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
   }, [])

   return (
      <GiftedChat
         messages={messages}
         onSend={messages => onSend(messages)}
         user={{
            _id: 1,
         }}
      />
   );
};

const styles = StyleSheet.create({});

