import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class Item extends Component {

  onPress(){
    console.log('Press Item')
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onPress}>
        <View style={styles.container}>
          <Text style={styles.listItem}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  listItem: {
    fontSize: 22,
    color: '#333333',
    textAlign: 'center',
    margin: 10,
  },
});

export default Item
