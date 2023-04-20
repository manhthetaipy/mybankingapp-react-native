import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import Translate from "./assets/screens/Translate";
import Performed from "./assets/screens/Performed";

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <Performed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,

    backgroundColor: "#F3F6FA",
  },
});
