/**
 * @format
 */
import {AppRegistry} from 'react-native';
import Eve from './src/App';
import {name as appName} from './app.json';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// const dats = creaeStore();

AppRegistry.registerComponent(appName, () => Eve);
