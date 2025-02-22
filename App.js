import React from "react";
import { View, Text, StyleSheet } from "react-native";
import List from "./components/List";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
