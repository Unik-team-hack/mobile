import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from '@/screens';
import {MainStackParamList, MAIN_ROUTES} from './types';

const Stack = createStackNavigator<MainStackParamList>();

export const MainScreenNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName={MAIN_ROUTES.MAIN}>
    {/* <Stack.Screen
      name={'NestedUnitSelectionScreen'}
      component={NestedUnitSelectionScreen}
      options={{
        headerTitleStyle: {fontSize: 18},
        cardStyle: {
          backgroundColor: 'white',
          // paddingHorizontal: 14,
          paddingTop: 4,
        },
        title: 'Университеты',
      }}
    /> */}
    <Stack.Screen
      name={MAIN_ROUTES.MAIN}
      component={screens.MainScreen}
      options={{
        headerTitleStyle: {fontSize: 18},
      }}
    />
  </Stack.Navigator>
);
