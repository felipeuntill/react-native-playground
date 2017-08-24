import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import { Header } from './components/common/';

class App extends Component {

  render() {
    return (
      <View style={styles.rootViewStyle}>
        <Header HeaderText="Login" />
        <Text>Working</Text>
      </View>
    );
  }

}
const styles = {
  rootViewStyle : {
    flex: 1
  }
}

export default App;
