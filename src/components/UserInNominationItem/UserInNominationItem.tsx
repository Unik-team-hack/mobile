import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {MainStackParamList, MAIN_ROUTES} from '@/navigation/MainScreen/types';
import {CoreTabsParamList, CORE_ROUTES} from '@/navigation/types';
import {UserResponseDto} from '@/api/dto';

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<CoreTabsParamList, CORE_ROUTES.MAIN>,
  StackNavigationProp<MainStackParamList>
>;

export const UserInNominationItem = ({
  image,
  needMark,
  hasFullMark,
  mark,
}: UserResponseDto) => {
  const navigation = useNavigation<NavigationProp>();
  const go = () => navigation.push(MAIN_ROUTES.MAIN, {id: '12324'});

  return (
    <TouchableOpacity style={styles.wrapper} onPress={go}>
      <View style={styles.info}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.text}>Качмазов Александр</Text>
      </View>
      {}
      {needMark && !hasFullMark && <Text style={styles.text}>Оценить</Text>}
      {needMark && hasFullMark && <Text style={styles.text}>{mark}</Text>}
      {/* <Icon name={'chevron-right'} color={'#ccc'} size={16} /> */}
    </TouchableOpacity>
  );
};

const SIZE = 48;

const styles = StyleSheet.create({
  empty: {
    color: 'grey',
  },
  wrapper: {
    // borderColor: '#ddd',
    // borderWidth: 1,
    // borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {fontSize: 16},
  image: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'white',
    borderRadius: SIZE / 2,
    marginRight: 12,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
