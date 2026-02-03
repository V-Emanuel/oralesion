import { categoriesData } from "@/assets/json/categoriesData";

import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Footer from "./components/footer";

export default function CategoriesPage() {
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
      <Footer />
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
    width: "45%",
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    margin: 8,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    position: "absolute",
    bottom: 12,
    left: 12,
  },
});
