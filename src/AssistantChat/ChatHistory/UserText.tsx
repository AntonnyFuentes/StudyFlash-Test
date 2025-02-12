import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { ArrowLeft } from "./BotText";

interface IProps {
  message: string;
}

export default function UserText({ message }: IProps) {
  return (
    <>
      <View style={s.container}>
        <Text style={s.text}>{message}</Text>
      </View>
      <ArrowLeft style={s.arrow} color={"#8E24B2"} />
    </>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#8E24B2",
    padding: 15,
    borderRadius: 15,
    alignSelf: "flex-end",
    marginRight: "0.8%",
  },
  text: {
    color: "white",
  },
  arrow: {
    position: "absolute",
    bottom: "-5%",
    alignSelf: "flex-end",
    transform: [{ rotateY: "180deg" }],
  },
});
