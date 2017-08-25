import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCZV1ULOHLMutvTzTsdHrPInfvFDS9SLJw',
      authDomain: 'auth-9c358.firebaseapp.com',
      databaseURL: 'https://auth-9c358.firebaseio.com',
      projectId: 'auth-9c358',
      storageBucket: 'auth-9c358.appspot.com',
      messagingSenderId: '835849536227'
    });
  }

  render() {
    return (
      <View style={styles.rootViewStyle}>
        <Header HeaderText="Login" />
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  rootViewStyle: {
    flex: 1
  }
};

export default App;
