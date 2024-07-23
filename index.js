/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-get-random-values'; // Đảm bảo rằng thư viện được cài đặt và hoạt động đúng

// Đăng ký ứng dụng chính
AppRegistry.registerComponent(appName, () => App);
