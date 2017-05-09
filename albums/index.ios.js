// IOS Interface

import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <View>
    <Header />
  </View>
);


AppRegistry.registerComponent('albums', () => App);
