import React, { Component } from 'react';
import { Modal, TouchableHighlight, View } from 'react-native';
import { FormLabel, FormInput, Text, Button } from 'react-native-elements'
import FirebaseClient from './FirebaseClient'

class AddGrocery extends Component {
  static navigationOptions = {
    title: 'Add a Grocery'
  }

  constructor(props) {
    super(props);

    this.state = {grocery: '', added: ''};
    this.updateGroceryText = this.updateGroceryText.bind(this)
    this.addGrocery = this.addGrocery.bind(this)
  }

  updateGroceryText(grocery){
    this.setState({grocery: grocery, added: ''})
  }

  addGrocery(){

    FirebaseClient.database().ref('/items').push({
      name: this.state.grocery
    })

    this.setState({grocery: '', added: 'Added!'})
  }

  render() {

    return (
      <View style={{marginTop: 22}}>
        <FormLabel labelStyle={{fontSize: 22}}>Grocery</FormLabel>
        <FormInput value={this.state.grocery} onChangeText={this.updateGroceryText} inputStyle={{fontSize: 28, marginTop: 10}} />

        <Button
          buttonStyle={{marginTop: 30}}
          onPress={this.addGrocery}
          raised
          title='ADD' />
        <Text style={{margin: 20}}>{this.state.added}</Text>
      </View>
    );
  }
}

export default AddGrocery




