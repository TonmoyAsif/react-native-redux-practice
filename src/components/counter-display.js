import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectCount } from "../../redux/counterSlice";

export default function CounterDisplay() {
  const count = useSelector(selectCount);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: </Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#e28743",
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    color: "#1e81b0",
  },
  count: {
    fontSize: 50,
    color: "#80391e",
  },
});
