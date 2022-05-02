import React from "react";
import { Text, StyleSheet, Linking, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Task from "./components/Task";
import { flushSync } from "react-dom";

var x = 30;

const asdfas = () => {
  x = x + 1;
  return x;
};

const App = () => {
  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.textWrapper}>
        <Text onPress={() => asdfas()} style={styles.sectionTitle}>
          Today's taks ({x}){"\n"}Total
        </Text>
        <View style={styles.items}>
          {/* This where the tasks will go!*/}
          <Task text="Like" />
          <Task text="Comment" />
          <Task text="Share" />
        </View>
      </View>
      <View style={styles.addItems}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  textWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});

export default App;
