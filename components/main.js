import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { UserContext } from './provider/user'
import { AuthorizedMain } from './authorized_main';

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
                <AuthorizedMain></AuthorizedMain>
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
