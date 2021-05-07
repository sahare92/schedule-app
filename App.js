import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Example } from './components/example'
import { Main } from './components/main'

import { UserProvider, UserContext } from './components/provider/user'

export default function App() {
  return (
    <UserProvider>
      <Main></Main>
    </UserProvider>
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
