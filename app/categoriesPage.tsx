import { categoriesData } from "@/assets/json/categoriesData";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Category = {
  id: string;
  name: string;
  image: any;
};

export default function CategoriesPage() {
  const { top, bottom } = useSafeAreaInsets();
  const router = useRouter();

  const handleNavigate = (id: string) => {
    router.push({
      pathname: "/categorie",
      params: { typeId: id },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{
          paddingTop: top + 16,
          paddingBottom: bottom + 90,
        }}
        renderItem={({ item }: { item: Category }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => handleNavigate(item.id)}
          >
            <Image source={item.image} style={styles.image} />

            <View style={styles.overlay}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },

  card: {
    width: "45%",
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 8,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  text: {
    position: "absolute",
    bottom: 12,
    left: 12,
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
