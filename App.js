import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store'
import { Provider } from 'react-redux'
import Home from './src/screens/home';

export default function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
