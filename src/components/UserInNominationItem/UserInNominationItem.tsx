import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {MainStackParamList, MAIN_ROUTES} from '@/navigation/MainScreen/types';
import {CoreTabsParamList, CORE_ROUTES} from '@/navigation/types';
import {UserResponseDto} from '@/api/dto';

const imageMock = require('@/mocks/avatar.jpg');

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<CoreTabsParamList, CORE_ROUTES.MAIN>,
  StackNavigationProp<MainStackParamList>
>;

export const UserInNominationItem = ({
  image,
  hasFullMark,
  mark,
  hasEditAccess,
  hasViewAccess,
  firstName,
  lastName,
  id,
  nominationId
}: UserResponseDto) => {
  const navigation = useNavigation<NavigationProp>();
  const go = () => {
    if (hasEditAccess) {
      navigation.push(MAIN_ROUTES.ASSESSMENT, {nominationId, userId:id});
    } else if (hasViewAccess) {
      // TODO: change
      // navigation.push(MAIN_ROUTES.ASSESSMENT, {id: '12324'});
    }
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={go}>
      <View style={styles.info}>
        <Image source={image ? {uri: image} : imageMock} style={styles.image} />
        <Text style={[styles.text, styles.fio]} adjustsFontSizeToFit>
          {`${firstName} ${lastName}`}
        </Text>
      </View>
      {hasEditAccess && !hasFullMark && (
        <Icon name={'edit'} color={'#00ACAB'} size={16} />
      )}
      {hasEditAccess && hasFullMark && (
        <Text style={[styles.text, styles.mark]}>{mark}</Text>
      )}
    </TouchableOpacity>
  );
};

const SIZE = 52;

const styles = StyleSheet.create({
  empty: {
    color: 'grey',
  },
  wrapper: {
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
    flex: 1,
  },
  mark: {
    marginRight: 6,
  },
  fio: {
    flex: 1,
  },
});
