import { useState, useEffect } from "react";
import {
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from "react-native";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

const socket = new WebSocket("ws://localhost:8080");

export default function useAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [inputHeight, setInputHeight] = useState(0);

  const changeHeightSize = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
  ) => {
    const height = e.nativeEvent.contentSize.height;
    if (height !== inputHeight) {
      setInputHeight(height + 15);
    }
  };

  useEffect(() => {
    socket.onmessage = (event) => {
      const botMessage: Message = {
        id: Date.now().toString(),
        text: event.data,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsBotTyping(false);
    };
    socket.onerror = (error) => console.error("WebSocket Error:", error);
    socket.onclose = () => console.log("WebSocket Disconnected");

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (suggestion?: string) => {
    const question = suggestion ?? userInput;
    setIsBotTyping(true);
    if (question.trim() && socket) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: question,
        sender: "user",
      };
      setMessages((prev) => [...prev, userMessage]);
      socket.send(question);
      setUserInput("");
    }
  };

  const onPressSuggestion = (input: string) => {
    sendMessage(input);
  };

  return {
    messages,
    isBotTyping,
    inputHeight,
    userInput,
    setUserInput,
    sendMessage,
    changeHeightSize,
    onPressSuggestion,
  };
}
