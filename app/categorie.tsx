import { additionalTests } from "@/assets/json/additional-tests-json";
import { benignNeoplasms } from "@/assets/json/benign-neoplasms-json";
import { childhoodOralLesions } from "@/assets/json/childhood-oral-lesions-json";
import { malignantNeoplasms } from "@/assets/json/malignant-neoplasms-json";
import { mostCommonOralLesions } from "@/assets/json/most-common-oral-lesions-json";
import { nonNeoplasticProliferativeProcesses } from "@/assets/json/non-neoplastic-proliferative-processes-json";
import { pigmentedLesions } from "@/assets/json/pigmented-lesions-json";
import { syndromesJson } from "@/assets/json/syndromes-json";
import { vesiculobullousAndUlcerativeLesions } from "@/assets/json/vesiculobullous-and-ulcerative-lesions-json";
import { whiteLesions } from "@/assets/json/white-lesions-json";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Lesion = {
  id: string;
  nome: string;
};

export default function Categorie() {
  const { typeId } = useLocalSearchParams<{ typeId: string }>();

  const dataMap: Record<string, Lesion[]> = {
    "1": mostCommonOralLesions,
    "2": childhoodOralLesions,
    "3": nonNeoplasticProliferativeProcesses,
    "4": whiteLesions,
    "5": pigmentedLesions,
    "6": vesiculobullousAndUlcerativeLesions,
    "7": benignNeoplasms,
    "8": malignantNeoplasms,
    "9": syndromesJson,
    "10": additionalTests,
  };

  const data = dataMap[typeId ?? ""] ?? [];
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        style={styles.flatList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingTop: top + 8,
          paddingBottom: bottom + 90,
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/lesion",
                params: { id: item.id, typeId },
              })
            }
          >
            <Text style={styles.title}>{item.nome}</Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum item encontrado.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  card: {
    width: "45%",
    paddingVertical: 12,
    paddingHorizontal: 12,
    boxSizing: "border-box",
    backgroundColor: "#e6e6e6",
    borderRadius: 12,
    margin: 8,
  },

  flatList: {
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 20,
    fontWeight: "400",
    color: "#111827",
  },

  separator: {
    height: 10,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#6B7280",
  },
});
