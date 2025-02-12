import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import useAssistant from "./useAssistant";
import ChatHistory from "./ChatHistory";
import ChatSuggestions from "./ChatSuggestions";
import Header from "./Components/Header";

export default function AssistantChat() {
  const {
    messages,
    userInput,
    inputHeight,
    changeHeightSize,
    sendMessage,
    setUserInput,
    onPressSuggestion,
  } = useAssistant();

  const hasUserChat = messages.length > 1;

  return (
    <View style={s.container}>
      <Header showUpgrade={!hasUserChat} />
      {hasUserChat ? (
        <ChatHistory messages={messages} />
      ) : (
        <ChatSuggestions onPressSuggestion={onPressSuggestion} />
      )}
      <View style={s.inputContainer}>
        <TextInput
          style={{ ...s.input, height: inputHeight }}
          value={userInput}
          onChangeText={setUserInput}
          placeholderTextColor={"#9D9D9D"}
          placeholder="Type your question"
          onContentSizeChange={changeHeightSize}
          multiline
        />
        <TouchableOpacity onPress={() => sendMessage()} style={s.sendButton}>
          <Text>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "5%",
    marginBottom: "5%",
  },
  listContent: {
    gap: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginHorizontal: "3%",
    marginTop: "5%",
    paddingHorizontal: "5%",
    paddingVertical: "1%",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#E3E3E3",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    lineHeight: 20,
  },
  sendButton: {
    borderRadius: 5,
  },
});
