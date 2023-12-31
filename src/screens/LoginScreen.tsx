import React from 'react';
import MainView from '../shared/components/MainView';
import LoginForm from '../modules/auth/presentation/components/LoginForm';
import {Dimensions, StyleSheet} from 'react-native';
import Modal from '../shared/components/Modal';
import LottieView from 'lottie-react-native';

const LoginScreen = () => {
  return (
    <MainView style={styles.container}>
      <LottieView
        source={require('./../shared/assets/lottiefiles/fast-shopping-delivery.json')}
        autoPlay
        loop
        style={{height: Dimensions.get('window').height / 2.5}}
      />
      <LoginForm />
      <Modal title="error" content="error" />
    </MainView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  titleText: {},
  container: {
    padding: 20,
  },
});
