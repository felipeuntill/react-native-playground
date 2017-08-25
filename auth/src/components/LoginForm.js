import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common/';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput style={styles.textInputStyle} />
        </CardSection>
        <CardSection>
          <TextInput style={styles.textInputStyle} />
        </CardSection>
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textInputStyle: {
    width: 100,
    height: 20,
    flex: 1
  }
};

export default LoginForm;
