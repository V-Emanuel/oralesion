import { StyleSheet, Text, View } from "react-native";

export default function People() {
  return (
    <View style={styles.container}>
      <Text>People Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});
