import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount } from "../../redux/counterSlice";

export default function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <View>
      <View style={styles.innerContainer}>
        <Pressable style={styles.button} onPress={() => { dispatch(increment()) }} >
          <Text>Increase</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => { dispatch(decrement()) }} >
          <Text>Decrease</Text>
        </Pressable>
      </View>
      <View style={styles.innerContainer}>
        <Pressable style={styles.button} onPress={() => { dispatch(incrementByAmount(50)) }} >
          <Text>Increment 50</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => { dispatch(decrementByAmount(50)) }} >
          <Text>Decrement 50</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#44bcd8",
  },
});
