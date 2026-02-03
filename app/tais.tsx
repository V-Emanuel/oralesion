import { Entypo } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./components/footer";

export default function Tais() {
  const tais = [
    "Aluna pesquisadora no Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação (PIBITI/ 2023-2024)",
    "Monitora Voluntária da Cadeira de Estomatologia",
    "Graduanda em Odontologia (2020-2025)",
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/people/tais.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 70 }}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <SafeAreaView style={styles.content}>
          <Text style={styles.title}>Taís Carvalho de Lima</Text>

          {tais.map((item, index) => (
            <View key={index} style={styles.row}>
              <Entypo name="dot-single" size={24} color="#333" />
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
        </SafeAreaView>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 310,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  content: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 70,
    boxSizing: "border-box",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  bullet: {
    fontSize: 18,
    marginRight: 8,
    lineHeight: 22,
  },
  text: {
    flex: 1,
    fontSize: 19,
    lineHeight: 22,
  },
});
