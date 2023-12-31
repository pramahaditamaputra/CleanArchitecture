import {StyleSheet} from 'react-native';
import React from 'react';
import {Input as RNEInput, InputProps} from 'react-native-elements';

const Input: React.FC<InputProps> = props => {
  return (
    <RNEInput
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      errorStyle={styles.errorStyle}
      containerStyle={styles.containerStyle}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 9999,
    borderColor: '#333',
    borderStyle: 'dotted',
    padding: 4,
    backgroundColor: '#fff',
  },
  inputStyle: {
    color: '#333',
    marginLeft: 10,
  },
  errorStyle: {},
  containerStyle: {},
});
