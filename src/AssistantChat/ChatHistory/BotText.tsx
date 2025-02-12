import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";

interface IProps {
  message: string;
}

export const ArrowLeft = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="32.484 17.5 15.515 17.5"
    enable-background="new 32.485 17.5 15.515 17.5"
    fill="currentColor"
    {...props}
  >
    <Path
      d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
      x="0"
      y="0"
    />
  </Svg>
);

export default function BotText({ message }: IProps) {
  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      <View style={s.dogImage} />
      <View style={s.container}>
        <Text>{message}</Text>
      </View>
      <ArrowLeft style={s.arrow} stroke={"#E3E3E3"} color={"white"} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    alignSelf: "flex-start",
    borderColor: "#E3E3E3",
    borderWidth: 1,
    marginLeft: "0.8%",
  },
  dogImage: {
    height: 20,
    width: 20,
    backgroundColor: "#8E24B2",
    borderRadius: 20,
  },
  arrow: {
    position: "absolute",
    bottom: "-5%",
    left: "7%",
    zIndex: -1,
  },
});
