import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/* =======================
   IMPORTS DOS JSONs
======================= */
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

/* =======================
   TIPOS
======================= */

type CategoryKey = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";

type Lesion = {
  id: string | undefined;
  typeId: string | undefined;
  nome: string | undefined;
  img?: number | undefined;
  fonte?: string | undefined;
  etiologia?: string | undefined;
  prevalencia?: string | undefined;
  caracteristicas_clinicas?: string | undefined;
  diagnostico_diferencial?: string | undefined;
  caracteristicas_histopatologicas?: string | undefined;
  prognostico?: string | undefined;
  tratamento?: string | undefined;
  referencias?: Record<string, string | undefined>;
};

const dataMap: Record<CategoryKey, Lesion[]> = {
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

export default function Lesion() {
  const params = useLocalSearchParams<{
    id?: string;
    typeId?: CategoryKey;
  }>();

  const { bottom } = useSafeAreaInsets();

  const lesion =
    params.typeId && params.id
      ? dataMap[params.typeId].find((item: Lesion) => item.id === params.id)
      : undefined;

  if (!lesion) {
    return (
      <View style={styles.center}>
        <Text>Lesão não encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: bottom + 32 }}
    >
      {lesion.img && <Image source={lesion.img} style={styles.image} />}

      <View style={styles.content}>
        <Text style={styles.title}>{lesion.nome}</Text>

        <Section title="Etiologia" text={lesion.etiologia} />
        <Section title="Prevalência" text={lesion.prevalencia} />
        <Section
          title="Características clínicas"
          text={lesion.caracteristicas_clinicas}
        />
        <Section
          title="Diagnóstico Diferencial"
          text={lesion.diagnostico_diferencial}
        />
        <Section
          title="Características histopatológicas"
          text={lesion.caracteristicas_histopatologicas}
        />
        <Section title="Prognóstico" text={lesion.prognostico} />
        <Section title="Tratamento" text={lesion.tratamento} />

        {lesion.referencias && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Referências</Text>

            {Object.values(lesion.referencias)
              .filter((ref): ref is string => typeof ref === "string")
              .map((ref, index) => (
                <Text key={index} style={styles.text}>
                  {ref}
                </Text>
              ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

function Section({ title, text }: { title: string; text?: string }) {
  if (!text) return null;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    color: "#111827",
  },

  section: {
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },

  text: {
    fontSize: 15,
    lineHeight: 22,
    color: "#374151",
    textAlign: "justify",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
