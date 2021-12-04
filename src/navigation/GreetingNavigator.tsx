// import React from 'react';
// import {
//   createStackNavigator,
//   StackNavigationOptions,
// } from '@react-navigation/stack';

// import {GreetingScreen, SignInScreen, SignUpScreen} from '@/screens';
// // import {SERVICES_ROUTES, ServicesStackParamList} from './types';

// const Stack = createStackNavigator();

// const screenOptions: StackNavigationOptions = {
//   headerTitleStyle: {fontSize: 20}, // 22
//   cardStyle: {
//     backgroundColor: '#ffffff',
//     // paddingTop: '40%',
//     paddingHorizontal: 14,
//   },
// };

// export const GreetingNavigator: React.FC = () => (
//   <Stack.Navigator screenOptions={screenOptions}>
//     {/* TODO: typing for route */}
//     <Stack.Screen
//       name="hello"
//       component={GreetingScreen}
//       options={{title: '', headerShown: false}}
//     />
//     {/* TODO: typing for route */}
//     <Stack.Screen
//       name="signin"
//       component={SignInScreen}
//       options={{title: 'Вход'}}
//     />
//     {/* TODO: typing for route */}
//     <Stack.Screen
//       name="signup"
//       component={SignUpScreen}
//       options={{title: 'Регистрация'}}
//     />
//   </Stack.Navigator>
// );
