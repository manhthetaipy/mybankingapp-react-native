import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// import Translate from "./assets/screens/Translate";
import Completed from "./assets/screens/Completed";

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <Completed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,

    backgroundColor: "#F3F6FA",
  },
});
