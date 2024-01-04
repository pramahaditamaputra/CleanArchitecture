import {useNavigation as useNavigationOriginal} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from './AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootParamList>;

export function useNavigation() {
  return useNavigationOriginal<NavigationProp>();
}
