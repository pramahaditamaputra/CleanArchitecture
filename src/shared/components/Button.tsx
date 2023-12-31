import {StyleSheet} from 'react-native';
import React from 'react';
import {Button as RNEButton, ButtonProps} from 'react-native-elements';

const Button: React.FC<ButtonProps> = props => {
  return <RNEButton buttonStyle={styles.buttonStyle} {...props} />;
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#b7d282',
    borderRadius: 9999,
    width: 325,
    height: 45,
  },
});
