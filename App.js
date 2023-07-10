// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Icon } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import SettingPage from './pages/SettingPage'


// import NavigationContainer 
import { NavigationContainer } from '@react-navigation/native';
// import function createNativeStackNavigator ในการสร้าง Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// สร้าง Stack component 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      {/* setup  NavigationContainer */}
      <NavigationContainer>
        {/* สร้าง Stack Navigator  */}
        <Stack.Navigator>
          {/* สร้าง กำหนด Home Component ให้กับหน้าแอพ (Screen ที่ชื่อว่า Home  */}
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Chat" component={ChatPage} />
          <Stack.Screen name="Settings" component={SettingPage} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}