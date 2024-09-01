import { AppRegistry } from 'react-native';
import MainPage from '../components/MainPage'; // Ensure this path is correct
import { name as appName } from '../app.json';

AppRegistry.registerComponent(appName, () => MainPage);

export default MainPage;