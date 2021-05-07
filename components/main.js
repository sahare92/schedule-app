import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { UserContext } from './provider/user'
import { TabViewExample } from './tab_view';

export class Main extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {
          user =>
          {
            if (user.id == null) {
              return (
                <UserAuthentication></UserAuthentication>
              );
            } else {
              return (
                <TabViewExample></TabViewExample>
              )
            }
          }
        }
      </UserContext.Consumer>
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
