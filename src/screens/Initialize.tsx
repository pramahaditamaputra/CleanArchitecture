import React, {useEffect} from 'react';
import {useGetUser} from '../modules/auth/application/hooks/useGetUser';
import {useNavigation} from '../navigation/useNavigation';

/**
 * The Initialize component is responsible for checking if the user is already logged in or not.
 * If the user is logged in, it navigates to the Home screen.
 * If the user is not logged in, it navigates to the Login screen.
 */
const Initialize: React.FC = () => {
  const {getUserInfo} = useGetUser();
  const navigation = useNavigation();

  useEffect(() => {
    /**
     * Handles the navigation based on the user's login status.
     */
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
