import React, { Component } from 'react';
import { Text } from 'react-native';
import { HTTPPostRequest } from '../common/requests'

const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: "",
  }

  apiURL = "http://localhost:5001/api"

  setUsername = (username) => {
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

  login = async (attributes) => {
    const response = await HTTPPostRequest(this.apiURL + "/login", attributes)
    if (response.status != 200) {
      alert("Failed to login!. reason: " + response.data["reason"])
      return
    }

    alert("Logged in successfully!")

    this.setUsername(response.data["username"])
    this.setPassword(response.data["password"])
    this.setName(response.data["name"])
    this.setEmail(response.data["email"])
  }

  render() {
    return (
      <UserContext.Provider value={{
        id: this.state.id,
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        email: this.state.email,

        // functions
        login: this.login,
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserContext }
