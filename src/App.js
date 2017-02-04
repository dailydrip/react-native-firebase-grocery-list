import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ListView,
  Button,
  ListItem,
  View
} from 'react-native';
import Item from './Item'
import AddGrocery from './AddGrocery'
import { StackNavigator } from 'react-navigation'
import FirebaseClient from './FirebaseClient'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  addButon: {
    fontSize: 30,
  }
});

const list = ['Loading...']

class App extends Component {

  static navigationOptions = {
    title: 'Grocery List',
    header: ({ state, setParams, navigate }) => ({
      right: (
        <Button
          title="ADD"
          onPress={() => navigate('Add')}
        />
      ),
    })
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: this.ds.cloneWithRows(list)
    };

    this.itemsRef = this.getRef().child('items');
    this.renderItem = this.renderItem.bind(this)
  }

  getRef() {
    return FirebaseClient.database().ref();
  }

  setItemsFromFirebase(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().name,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.ds.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.setItemsFromFirebase(this.itemsRef);
  }

  renderItem(item) {
    return (
      <Item item={item} />
    )
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderItem} />
      </View>
      )
  }
}

const AppNavigator = StackNavigator({
  Home: { screen: App },
  Add: { screen: AddGrocery }
});

export default AppNavigator
