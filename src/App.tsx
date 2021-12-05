import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';

import {CoreNavigator} from './navigation';
import {GreetingNavigator} from './navigation/GreetingNavigator';
import AuthStore from './store/AuthStore';

export const App = observer(() => {
  const {token} = React.useContext(AuthStore);

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      {token ? <CoreNavigator /> : <GreetingNavigator />}
    </NavigationContainer>
  );
});
