import React, { Component } from 'react';

import {  StyleSheet, Text, View } from 'react-native';

import { UserContext } from './provider/user'

export class Example extends Component {
  render() {
    return (
      <UserContext>
        {
          user =>
          <View style={styles.scene}>
            <Text>Hello, I am your example! {user.name}</Text>
          </View>
        }
      </UserContext>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
