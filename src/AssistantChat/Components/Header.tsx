import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface IProps {
  showUpgrade: boolean;
}

export default function ChatHistory({ showUpgrade }: IProps) {
  const onPressUpgrade = () => {};

  return (
    <View style={s.container}>
      <Text style={s.title}>AI Assistant</Text>
      {showUpgrade ? (
        <TouchableOpacity
          style={s.pill}
          onPress={onPressUpgrade}
          activeOpacity={0.8}
        >
          <Text style={s.pillText}>Upgrade</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressUpgrade} activeOpacity={0.8}>
          <Text style={s.pillText}>Arrow</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    marginTop: "4%",
    marginBottom: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "3%",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
  },
  pill: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: "2%",
    paddingHorizontal: "4%",
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 15,
    backgroundColor: "white",
  },
  pillText: {
    fontSize: 13,
    color: "#8E24B2",
    fontWeight: "bold",
  },
});
