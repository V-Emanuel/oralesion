import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import People from "./people";
import Tais from "./tais";

export default function pager() {
  return (
    <PagerView style={styles.container} initialPage={0}>
      <View key="1" style={styles.page}>
        <People />
      </View>

      <View key="2" style={styles.page}>
        <Tais />
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
});
