import { LinearGradient } from "expo-linear-gradient";
import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./components/footer";

export default function Contact() {
  const email = "oralesionapp@gmail.com";

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>E-mail para contato:</Text>

        <TouchableOpacity activeOpacity={0.8} onPress={handleEmailPress}>
          <LinearGradient
            colors={["#007AFF", "#7B61FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.email}>{email}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.helper}>clique para escrever e-mail</Text>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    width: "88%",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  label: {
    width: "100%",
    fontSize: 16,
    color: "#8E8E93",
    marginBottom: 2,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
    minWidth: "100%",
    alignItems: "center",
  },
  email: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  helper: {
    marginTop: 2,
    fontSize: 13,
    color: "#8E8E93",
  },
});
