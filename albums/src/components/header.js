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
      height: 60
    },
    textStyle: {
      fontSize: 20
    }
};

export default Header;
