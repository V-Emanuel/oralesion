import { categoriesData } from "@/assets/json/categoriesData";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingTop: top + 16,
          paddingBottom: bottom + 90,
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* FOOTER */}
      <View style={[styles.footer, { paddingBottom: bottom }]}>
        <Ionicons name="home" size={28} color="#fff" />
        <Ionicons name="people" size={28} color="#3B82F6" />
        <Ionicons name="mail" size={28} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  card: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#D1D5DB",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
