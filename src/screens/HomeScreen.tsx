import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LocalStorageService from '../shared/asyncstorage/LocalStorageService';

const HomeScreen = () => {
  useEffect(() => {
    LocalStorageService.clear();
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
