import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, View } from "react-native";
import { GradientIcon } from "./gradientIcon";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <GradientIcon
        size={42}
        colors={["#3B82F6", "#7C3AED"] as const}
        icon={<Entypo name="home" size={42} color="black" />}
      />

      <GradientIcon
        size={54}
        colors={["#3B82F6", "#06B6D4"] as const}
        icon={<MaterialIcons name="groups" size={54} color="black" />}
      />

      <GradientIcon
        size={42}
        colors={["#7C3AED", "#EC4899"] as const}
        icon={<MaterialIcons name="email" size={42} color="black" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#D1D5DB",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
