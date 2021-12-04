import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EventResponseDto} from '@/api/dto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UsersStack} from '@/components/UsersStack';

export const EventScreen = () => {
  const [event, setEvent] = React.useState<EventResponseDto | null>(null);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  React.useEffect(() => {
    // TODO: load event
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Хакатон studhack</Text>
      <View style={[styles.dateWrapper, styles.section]}>
        <Icon
          name={'calendar'}
          color={'gray'}
          size={18}
          style={styles.dateIcon}
        />
        <Text style={styles.date}>Декабрь 12, 2021г.</Text>
      </View>
      <View style={styles.section}>
        {/* <Text style={styles.h2}>Участники</Text> */}
        <UsersStack
          avatars={[
            'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
            'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
            'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
          ]}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.h2}>О мероприятии</Text>
        <Text style={styles.text}>Сидим чиллим на тусе</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    // fontWeight: '600',
    fontWeight: 'bold',
    marginTop: 8,
  },
  date: {
    color: 'grey',
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateIcon: {
    marginRight: 8,
  },
  h2: {
    fontWeight: '600',
    marginBottom: 4,
  },
  text: {
    color: 'grey',
  },
  section: {
    marginTop: 16,
  },
});
