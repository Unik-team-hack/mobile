import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from '@/screens';
import {MainStackParamList, MAIN_ROUTES} from './types';

const Stack = createStackNavigator<MainStackParamList>();

export const MainScreenNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName={MAIN_ROUTES.MAIN}
    screenOptions={{headerTitleStyle: {fontSize: 18}}}>
    <Stack.Screen name={MAIN_ROUTES.MAIN} component={screens.EventsScreen} />
    <Stack.Screen
      name={MAIN_ROUTES.EVENT_DETAIL}
      component={screens.EventScreen}
      options={{
        cardStyle: {backgroundColor: 'white'},
      }}
    />
    <Stack.Screen
      name={MAIN_ROUTES.NOMINATION}
      component={screens.NominationScreen}
      options={{
        cardStyle: {backgroundColor: 'white'},
      }}
    />
    <Stack.Screen
      name={MAIN_ROUTES.ASSESSMENT}
      component={screens.AssessmentScreen}
      options={{
        cardStyle: {backgroundColor: 'white'},
      }}
    />
  </Stack.Navigator>
);
