/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Bootstrap from './src/screens/Bootstrap';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Bootstrap);
