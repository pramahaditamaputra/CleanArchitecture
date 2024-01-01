import {StyleSheet} from 'react-native';
import React from 'react';
import {Button as RNEButton, ButtonProps} from 'react-native-elements';

interface IButtonProps extends ButtonProps {
  buttonCustomStyle?: ButtonProps['buttonStyle'];
  titleCustomStyle?: ButtonProps['titleStyle'];
}

const Button: React.FC<IButtonProps> = props => {
  const {type = 'solid'} = props;
  const dynamicStyle = createButtonStyle({type});
  return (
    <RNEButton
      buttonStyle={[dynamicStyle.buttonStyle, props.buttonCustomStyle]}
      titleStyle={[dynamicStyle.titleStyle, props.titleCustomStyle]}
      {...props}
    />
  );
};

export default Button;

interface IButtonStyleProps {
  type: Pick<ButtonProps, 'type'>['type'];
}

const createButtonStyle = (props: IButtonStyleProps) => {
  return StyleSheet.create({
    buttonStyle: {
      borderRadius: 999999999,
      backgroundColor: props?.type !== 'solid' ? '#fff' : '#b7d282',
      borderColor: props?.type !== 'clear' ? '#b7d282' : '#fff',
    },
    titleStyle: {
      color: props?.type !== 'solid' ? '#b7d282' : '#fff',
    },
  });
};
