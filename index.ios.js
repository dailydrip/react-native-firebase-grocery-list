import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/App'

const GroceryList  = () => {
  return (<App />);
}

AppRegistry.registerComponent('GroceryList', () => GroceryList);
