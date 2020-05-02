import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

const StoryBook = require('./storybook');

AppRegistry.registerComponent(appName, () => App);

export default StoryBook;
