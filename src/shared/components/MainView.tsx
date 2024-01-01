import {
  SafeAreaView,
  StyleSheet,
  View as RNView,
  ViewProps,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import React from 'react';
import {KeyboardAvoidingView} from 'react-native-keyboard-controller';
interface IMainViewProps extends ViewProps {
  customStyle?: StyleProp<ViewStyle>;
}

const MainView: React.FC<IMainViewProps> = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={styles.container}
      style={[styles.container, props.customStyle]}>
      <SafeAreaView style={[styles.container, props.customStyle]} {...props}>
        <RNView style={[styles.container, props.customStyle]} {...props}>
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
    padding: 7.5,
  },
});
