import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {ExtendedEventResponseDto, NominationResponseDto} from '@/api/dto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UsersStack} from '@/components/UsersStack';
import {NominationsList} from '@/components/NominationsList';
import {API} from '@/api';
import {NavigationProp, RouteProp} from '@react-navigation/core';
import {MAIN_ROUTES} from '@/navigation/MainScreen/types';
import {Section} from '@/components/Section';
import {formatDate} from '@/utils';

interface EventScreenProps {
  navigation: NavigationProp<any, MAIN_ROUTES.EVENT_DETAIL>;
  route: RouteProp<{params: {id: string}}, 'params'>;
}

export const EventScreen = ({route}: EventScreenProps) => {
  const [event, setEvent] = React.useState<ExtendedEventResponseDto | null>(
    null,
  );
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  React.useEffect(() => {
    setIsRefreshing(true);
    API.events
      .getDetails(route.params.id)
      .then(setEvent)
      .finally(() => {
        setIsRefreshing(false);
      });
  }, [route?.params?.id]);

  if (isRefreshing) {
    return (
      <View>
        <Text>Загрузка</Text>
      </View>
    );
  }

  if (event === null) {
    return (
      <View>
        <Text>
          Что-то пошло не так. Либо такого конкурса нет, либо он Вам недоступен
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{event.name}</Text>
      <Section>
        <View style={styles.dateWrapper}>
          <Icon
            name={'calendar'}
            color={'gray'}
            size={18}
            style={styles.dateIcon}
          />
          <Text style={styles.date}>{formatDate(event.date)}</Text>
        </View>
      </Section>
      <Section>
        <UsersStack avatars={event.participants.map(x => x.image || false)} />
      </Section>
      <Section title="О мероприятии">
        <Text style={styles.text}>{event.description}</Text>
      </Section>
      <Section title="Номинации">
        <NominationsList data={event.nominations} />
      </Section>
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
  text: {
    color: 'grey',
  },
});
