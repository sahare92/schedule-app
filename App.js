import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Example } from './components/example'
import { TabViewExample } from './components/tab_view'

export default function App() {
  return (
    <TabViewExample></TabViewExample>
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
