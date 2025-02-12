import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import BotText from "./BotText";
import UserText from "./UserText";

interface IProps {
  messages: any[];
}

export default function ChatHistory({ messages }: IProps) {
  return (
    <Animated.View style={s.container} entering={FadeIn} exiting={FadeOut}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={s.listContent}
        renderItem={({ item }) =>
          item.sender === "user" ? (
            <UserText message={item.text} />
          ) : (
            <BotText message={item.text} />
          )
        }
      />
    </Animated.View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    gap: 15,
  },
});
