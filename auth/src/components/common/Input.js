import React  from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChange }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChange={onChange}
        style={styles.textInputStyle}
      />
    </View>
  );
};

const styles = {
  textInputStyle: {
    width: 100,
    height: 20,
  }
};

export { Input };
