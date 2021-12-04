import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {EventResponseDto} from '@/api/dto';

export const EventItem = ({
  name,
  description,
  participantsCount,
}: Pick<EventResponseDto, 'name' | 'description' | 'participantsCount'>) => (
  <View style={styles.wrapper}>
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
  </View>
);

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
    marginHorizontal: 8,
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
