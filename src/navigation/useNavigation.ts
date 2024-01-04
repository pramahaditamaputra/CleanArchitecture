import {useNavigation as useNavigationOriginal} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from './AppNavigator';

/**
 * Represents the navigation prop for the screen component.
 */
type NavigationProp = NativeStackNavigationProp<RootParamList>;

/**
 * Hook for accessing the navigation prop.
 * @returns The navigation prop.
 */
export function useNavigation() {
  return useNavigationOriginal<NavigationProp>();
}
