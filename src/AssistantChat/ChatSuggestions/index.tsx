import React from "react";
import { Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const initQuestions = [
  "What is flashcard?",
  "Study methods",
  "How to create decks",
];

interface IProps {
  onPressSuggestion: (v: string) => void;
}

export default function ChatSuggestions({ onPressSuggestion }: IProps) {
  return (
    <Animated.View style={s.container} entering={FadeIn} exiting={FadeOut}>
      <FlatList
        data={initQuestions}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={s.listContent}
        columnWrapperStyle={s.column}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={s.pill}
            onPress={() => onPressSuggestion(item)}
          >
            <Text style={s.pillText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  listContent: {
    flex: 1,
    gap: 10,
    justifyContent: "flex-end",
    marginHorizontal: "3%",
  },
  column: {
    gap: 10,
    alignSelf: "flex-end",
  },
  pill: {
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    backgroundColor: "white",
  },
  pillText: {
    fontSize: 13,
    fontWeight: "500",
  },
});
