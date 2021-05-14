import React, { Component } from 'react';

import {  TextInput, StyleSheet } from 'react-native';

export class TextInputWithBorder extends Component {
  render() {
    return (
      <TextInput style={styles.textInput} editable maxLength={this.props.maxLength} placeholder={this.props.placeholder} onChangeText={this.props.onChangeText}/>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: 80,
    textAlign: "center",
  },
});
