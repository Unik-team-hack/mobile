import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {SignInScreen} from '@/screens/StartScreens/SignInScreen';
import {SignUpScreen} from '@/screens/StartScreens/SignUpScreen';

import {StackScreenProps} from '@react-navigation/stack';

export enum GREETING_ROUTES {
  SIGNIN = 'Вход',
  SIGNUP = 'Регистрация',
}

export type GreetingStackParamList = {
  [GREETING_ROUTES.SIGNIN]: undefined;
  [GREETING_ROUTES.SIGNUP]: {id: string};
};

export type ProfileNavProps<T extends keyof GreetingStackParamList> =
  StackScreenProps<GreetingStackParamList, T>;

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerTitleStyle: {fontSize: 20}, // 22
  cardStyle: {
    backgroundColor: '#ffffff',
    // paddingTop: '40%',
    paddingHorizontal: 14,
  },
};

export const GreetingNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen
      name={GREETING_ROUTES.SIGNIN}
      component={SignInScreen}
      options={{title: 'Вход'}}
    />
    <Stack.Screen
      name={GREETING_ROUTES.SIGNUP}
      component={SignUpScreen}
      options={{title: 'Регистрация'}}
    />
  </Stack.Navigator>
);
