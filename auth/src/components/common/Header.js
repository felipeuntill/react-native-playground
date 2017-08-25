import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.HeaderText}</Text>
    </View>
  );
};

const styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      paddingTop: 20,
      height: 60,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    textStyle: {
      fontSize: 20
    }
};

export { Header };
