import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
  participantsCount,
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
      <View style={styles.countersWrapper}>
        <Text>
          <Icon
            name={'users'}
            color={'black'}
            size={12}
            solid
            style={styles.icon}
          />
          <Text style={styles.counter}>{participantsCount}</Text>
        </Text>
      </View>
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
    paddingVertical: 8,
    borderRadius: 8,
  },
  countersWrapper: {
    paddingTop: 4,
  },
  icon: {
    marginRight: 12,
  },
  counter: {
    // TODO: fix
    // marginLeft: 12,
    // paddingLeft: 12,
  },
});
