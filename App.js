import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreenStack} from './Navigation/MainNavigator';

const App = props => {
  return (
    <NavigationContainer >
      <HomeScreenStack />
    </NavigationContainer>
  );
}

export default App;
