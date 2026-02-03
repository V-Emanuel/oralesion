import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, View } from "react-native";

export default function Footer() {
  return (
    <View style={[styles.footer]}>
      <Entypo name="home" size={38} color="#fff" />
      <MaterialIcons name="groups" size={48} color="#3B82F6" />
      <MaterialIcons name="email" size={38} color="#fff" />
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
