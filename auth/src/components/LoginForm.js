import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common/';

class LoginForm extends Component {

  state = { text : ''};

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Username'
            value={this.state.text}
            onChange={text => this.setState({ text })}
          />
        </CardSection>
        <CardSection>
        <Input
          label='Password'
          value={this.state.text}
          onChange={text => this.setState({ text })}
        />
        </CardSection>
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}


export default LoginForm;
