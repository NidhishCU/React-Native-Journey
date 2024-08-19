/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './screens/App';
import SingUp from "./screens/SignUp";
import F from './screens/FlatList';
import MapList from './screens/ListMap';
import Grid from './screens/Grid';
import Home from './screens/Home';
import Start from './screens/Start';
import {name as appName} from './app.json';
import StatePropsInClassComponent from './screens/StatePropsInClassComponent';
import UseEffectOnStateProps from './screens/UseEffectOnStateProps';
import ShowHideComponent from './screens/ShowHideComponent';

AppRegistry.registerComponent(appName, () => ShowHideComponent);

