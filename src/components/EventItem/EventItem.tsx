import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EventResponseDto} from '@/api/dto';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import {MainStackParamList, MAIN_ROUTES} from '@/navigation/MainScreen/types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {CoreTabsParamList, CORE_ROUTES} from '@/navigation/types';

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<CoreTabsParamList, CORE_ROUTES.MAIN>,
  StackNavigationProp<MainStackParamList>
>;

export const EventItem = ({
  id,
  name,
  description,
}: Pick<
  EventResponseDto,
  'id' | 'name' | 'description' | 'participantsCount'
>) => {
  const navigation = useNavigation<NavigationProp>();
  const go = () => navigation.navigate(MAIN_ROUTES.EVENT_DETAIL, {id});

  return (
    <TouchableOpacity style={styles.wrapper} onPress={go}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 4,
  },
  description: {
    color: '#777',
  },
  wrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
  },
});
