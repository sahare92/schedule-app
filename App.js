import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Cat } from './components/cat'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!2</Text>
      <StatusBar style="auto" />
      <Cat />
    </View>
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
