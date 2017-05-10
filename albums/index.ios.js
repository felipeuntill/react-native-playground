// IOS Interface

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <View>
    <Header />
  </View>
);


AppRegistry.registerComponent('albums', () => App);
