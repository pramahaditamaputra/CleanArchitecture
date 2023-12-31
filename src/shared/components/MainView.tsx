import {
  SafeAreaView,
  StyleSheet,
  View as RNView,
  StyleProp,
  ViewStyle,
  ViewProps,
} from 'react-native';
import React from 'react';

interface IViewProps extends ViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const MainView: React.FC<IViewProps> = ({children, style}) => {
  return (
    <SafeAreaView style={styles.container}>
      <RNView style={[styles.container, style]}>{children}</RNView>
    </SafeAreaView>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
