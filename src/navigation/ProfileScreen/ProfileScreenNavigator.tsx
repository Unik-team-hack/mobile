import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import * as screens from '@/screens';

import { ProfileStackParamList, PROFILE_ROUTES } from "./types";

const Stack = createStackNavigator<ProfileStackParamList>();
export const ProfileScreenNavigator: React.FC = () => (
    <Stack.Navigator
      initialRouteName={PROFILE_ROUTES.PROFILE}
      screenOptions={{headerTitleStyle: {fontSize: 18}}}>
      <Stack.Screen name={PROFILE_ROUTES.PROFILE} component={screens.ProfileScreen} />
      <Stack.Screen name={PROFILE_ROUTES.CHANGE_NAME} component={screens.ChangeName} />
      <Stack.Screen name={PROFILE_ROUTES.CHANGE_PASS} component={screens.ChangePass} />
    </Stack.Navigator>
  );