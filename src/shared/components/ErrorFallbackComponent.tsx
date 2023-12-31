// import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import type {FallbackComponentProps} from 'react-native-error-boundary';

// import ROUTE_NAMES from '@navigation/firstMile/routeNames';
// import fontFamily from '@themes/fontFamily';

const ErrorCallbackComponent: React.FC<FallbackComponentProps> = props => {
  console.log('[JS-ERROR]', props.error);
  //   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terjadi Kesalahan</Text>
      <Text style={styles.description}>{props.error.name}</Text>
      <Text style={styles.description}>{props.error.message}</Text>
      {/* <Text style={styles.description}>{props.error.stack}</Text> */}
      <Button
        title="Kembali"
        onPress={() => {
          if (__DEV__) {
            return props.resetError();
          }
          //   navigation.dispatch(
          //     CommonActions.reset({
          //       index: 0,
          //       routes: [
          //         {
          //           name: ROUTE_NAMES.MAIN_ENTRY_POINT_SCREEN,
          //         },
          //       ],
          //     }),
          //   );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  description: {
    // fontFamily: fontFamily.medium,
    fontSize: 14,
  },
  title: {
    // fontFamily: fontFamily.medium,
    fontSize: 24,
  },
});

export default memo(ErrorCallbackComponent);
