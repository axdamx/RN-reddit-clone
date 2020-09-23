import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Provider as StoreProvider} from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import navigationTheme from './src/navigation/navigationTheme';
import store from './src/redux/store';

Icon.loadFont();
export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
}
