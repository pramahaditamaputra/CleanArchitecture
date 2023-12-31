import React from 'react';
import {Overlay, Text} from 'react-native-elements';
import {useSharedModalStore} from '../store/shared.modal.store';

const Modal = ({title, content}) => {
  const isVisible = useSharedModalStore(state => state.isVisible);
  return (
    <Overlay isVisible={isVisible}>
      <Text h1>{title}</Text>
      <Text h3>{content}</Text>
    </Overlay>
  );
};

export default Modal;
