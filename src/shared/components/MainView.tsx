import {
  SafeAreaView,
  StyleSheet,
  View as RNView,
  ViewProps,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

const MainView: React.FC<ViewProps> = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView style={styles.container} {...props}>
        <RNView style={[styles.container, props.style]} {...props}>
          {props.children}
        </RNView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
