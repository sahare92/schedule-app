import React, { Component } from 'react';
import { Text } from 'react-native';

const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    id: "some-id",
    username: "some-username",
    password: "some-pass",
    name: "some-name",
    email: "some-email",
  }

  setID = (id) => {
    this.setState({id})
  }
  setName = (username) => {
    this.setState({username})
  }
  setPassword = (password) => {
    this.setState({password})
  }
  setName = (name) => {
    this.setState({name})
  }
  setEmail = (email) => {
    this.setState({email})
  }

  render() {
    return (
      <UserContext.Provider value={{
        id: this.state.id,
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        email: this.state.email,

        setName: this.setName,
        setPassword: this.setPassword,
        setName: this.setName,
        setEmail: this.setEmail,
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserContext }
