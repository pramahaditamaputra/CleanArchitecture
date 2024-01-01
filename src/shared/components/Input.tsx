import {StyleSheet} from 'react-native';
import React from 'react';
import {Input as RNEInput, InputProps} from 'react-native-elements';

interface IInputProps extends InputProps {
  inputCustomStyle?: any;
  inputContainerCustomStyle?: any;
}

const Input: React.FC<IInputProps> = props => {
  return (
    <RNEInput
      inputContainerStyle={[
        styles.inputContainerStyle,
        props.inputContainerCustomStyle,
      ]}
      inputStyle={[styles.inputStyle, props.inputCustomStyle]}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 9999999,
    borderColor: '#b7d282',
    borderStyle: 'dotted',
    backgroundColor: '#fff',
  },
  inputStyle: {
    color: '#b7d282',
    marginLeft: 10,
  },
});
