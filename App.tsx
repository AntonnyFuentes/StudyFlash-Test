import { StyleSheet, SafeAreaView, View } from "react-native";
import AssistantChat from "./src/AssistantChat";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={s.container}>
      <LinearGradient
        colors={["#F1E3F6", "#FCFCFC"]}
        style={s.background}
        end={[0.5, 0.3]}
      />
      <SafeAreaView style={s.safeArea}>
        <AssistantChat />
      </SafeAreaView>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  safeArea: {
    flex: 1,
  },
});
