import React, {useEffect} from 'react';
import {useGetUser} from '../modules/auth/application/hooks/useGetUser';
import {useNavigation} from '../navigation/useNavigation';

const Initialize: React.FC = () => {
  const {getUserInfo} = useGetUser();
  const navigation = useNavigation();

  useEffect(() => {
    const handleNavigation = async () => {
      try {
        const user = await getUserInfo();
        if (user) {
          navigation.replace('MainApp', {screen: 'Home'});
        } else {
          navigation.replace('Login');
        }
      } catch (err) {
        console.log('err', err);
      }
    };

    handleNavigation();
  }, [getUserInfo, navigation]);

  return null;
};

export default Initialize;
