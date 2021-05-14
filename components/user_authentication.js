import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TextInputBase } from 'react-native';
import { TextInputWithBorder } from './common/components';

import { UserContext } from './provider/user'

export class UserAuthentication extends Component {
  state = {
    register: false,
    username: "",
    password: "",
    name: "",
    email: "",
  }
  getUserAttributes = () => {
    return {
      "username": this.state.username,
      "password": this.state.password,
      "name": this.state.name,
      "email": this.state.email,
    }
  }
  render() {
    if (this.state.register) {
      return (
        <UserContext.Consumer>
        {
          user =>
          <View style={styles.scene}>
            <TextInputWithBorder maxLength={40} placeholder="username" onChangeText={username => this.setState({username})}/>
            <TextInputWithBorder maxLength={40} placeholder="password" onChangeText={password => this.setState({password})}/>
            <TextInputWithBorder maxLength={40} placeholder="name" onChangeText={name => this.setState({name})}/>
            <TextInputWithBorder maxLength={40} placeholder="email" onChangeText={email => this.setState({email})}/>
            <Button title="Register"/>
            <Text>Already registered?</Text>
            <Button title="Log in" onPress={() => this.setState({register: false})}/>
          </View>
        }
        </UserContext.Consumer>
      );
    } else {
      return (
        <UserContext.Consumer>
        {
          user =>
          <View style={styles.scene}>
            <TextInputWithBorder maxLength={40} placeholder="username" onChangeText={username => this.setState({username})}/>
            <TextInputWithBorder maxLength={40} placeholder="password" onChangeText={password => this.setState({password})}/>
            <Button title="Log in" onPress={() => user.login(this.getUserAttributes())}/>
            <Text>Not registered?</Text>
            <Button title="Register" onPress={() => this.setState({register: true})}/>
          </View>
        }
        </UserContext.Consumer>
      );
    }
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
