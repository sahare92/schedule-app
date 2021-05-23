import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { UserContext } from './provider/user'
import { AuthorizedMain } from './authorized_main';
import { UserAuthentication } from './user_authentication';

export class Main extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {
          user =>
          {
            if (user.username) {
              return (
                <AuthorizedMain></AuthorizedMain>
              );
            } else {
              return (
                <UserAuthentication></UserAuthentication>
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
