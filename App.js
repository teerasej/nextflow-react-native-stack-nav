// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Icon } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import SettingPage from './pages/SettingPage'


// import NavigationContainer 

// import function createNativeStackNavigator ในการสร้าง Stack Navigation


// สร้าง Stack component 


export default function App() {
  return (
    <NativeBaseProvider>
      {/* setup  NavigationContainer */}
      
    </NativeBaseProvider>
  );
}