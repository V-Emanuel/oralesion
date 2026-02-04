import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { usePathname, useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import GradientIcon from "./gradientIcon";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <View style={styles.footer}>
      <Pressable onPress={() => router.push("/")}>
        {isActive("/") ? (
          <GradientIcon
            size={42}
            colors={["#8C61B7", "#008CFF"] as const}
            icon={<Entypo name="home" size={42} color="black" />}
          />
        ) : (
          <Entypo name="home" size={42} color="#fff" />
        )}
      </Pressable>
      <Pressable onPress={() => router.push("/pager")}>
        {isActive("/pager") ? (
          <GradientIcon
            size={54}
            colors={["#8C61B7", "#008CFF"] as const}
            icon={<MaterialIcons name="groups" size={54} color="black" />}
          />
        ) : (
          <MaterialIcons name="groups" size={54} color="#fff" />
        )}
      </Pressable>
      <Pressable onPress={() => router.push("/contact")}>
        {isActive("/contact") ? (
          <GradientIcon
            size={42}
            colors={["#8C61B7", "#008CFF"] as const}
            icon={<MaterialIcons name="email" size={42} color="black" />}
          />
        ) : (
          <MaterialIcons name="email" size={42} color="#fff" />
        )}
      </Pressable>
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
