import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {CoreNavigator} from './navigation';

export const App = () => {
  // const token = 'sometoken';

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <CoreNavigator />
      {/* {token ? <CoreNavigator /> : <GreetingNavigator />} */}
    </NavigationContainer>
  );
};
