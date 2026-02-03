import { Entypo } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./components/footer";

export default function People() {
  const jeferson = [
    "Aluno pesquisador no Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação (PIBITI/ 2022-2023)",
    "Graduando em Odontologia (2019-2023)",
  ];

  const fernanda = [
    "Mestranda em Odontologia com ênfase em Clínica Integrada pela Universidade Federal de Pernambuco (UFPE).",
    "Pós Graduanda em Odontologia para Pacientes com Necessidades Especiais pelo Centro Odontológico de Estudos e Pesquisas (COESP).",
    "Cirurgiã Dentista graduada pela Universidade Estadual da Paraíba (UEPB).",
  ];

  const katarina = [
    "Doutoranda em Odontologia no Programa de Pós-Graduação em Odontologia da Universidade Federal de Pernambuco (UFPE).",
    "Mestra em Perícias Forenses pela Universidade de Odontologia da Universidade de Pernambuco (FOP-UPE)",
    "Pós Graduanda em Ortodontia na Associação Brasileira de Odontologia de Pernambuco (ABO-PE)",
    "Cirurgiã-dentista graduada pela Faculdade de Odontologia da Universidade de Pernambuco (FOP-UPE)",
  ];

  const jair = [
    "Mestrado, Doutorado e duas vezes Pós-doutorado no Eastman Dental Institute da Universidade de Londres.",
    "Honorary professor da University College London",
    "Diplomat da European Association of Oral Medicine",
    "Cirurgião-dentista graduado pela Universidade Federal de Pernambuco 1990 (UFPE)",
  ];

  const alessandra = [
    "Doutorado em Estomatologia pelo programa integrado da Universidade Federal da Paraíba e da Bahia (UFPB/UFBA)",
    "Mestrado em Estomatologia pela Universidade Federal da Paraíba",
    "Especialista em Diagnóstico Oral e Radiodiagnóstico pela Fundação Odontológica Presidente Castelo Branco (FOPCB)",
    "Especialista em Odontopediatria pela Associação Brasileira de Odontologia (ABO-PE)",
    "Cirurgiã-dentista formada pela Faculdade de Odontologia da Universidade de Pernambuco (FOP-UPE)",
  ];

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/people/equipe.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <ScrollView>
        <SafeAreaView style={styles.content}>
          <Text style={styles.title}>Jefferson Jorge Morais de Souza</Text>
          {jeferson.map((item, index) => (
            <View key={index} style={styles.row}>
              <Entypo name="dot-single" size={24} color="#333" />
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
          <Text style={styles.title}>Fernanda Suely Barros Dantas</Text>
          {fernanda.map((item, index) => (
            <View key={index} style={styles.row}>
              <Entypo name="dot-single" size={24} color="#333" />
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
          <Text style={styles.title}>Katarina Haluli Jano da Veiga Pessoa</Text>
          {katarina.map((item, index) => (
            <View key={index} style={styles.row}>
              <Entypo name="dot-single" size={24} color="#333" />
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
          <Text style={styles.title}>Jair Carneiro Leão</Text>
          {jair.map((item, index) => (
            <View key={index} style={styles.row}>
              <Entypo name="dot-single" size={24} color="#333" />
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
          <Text style={styles.title}>
            Alessandra de Albuquerque Tavares Carvalho
          </Text>
          {alessandra.map((item, index) => (
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
  image: {
    width: "100%",
    height: 270,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
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
