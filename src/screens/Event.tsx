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
    // setIsRefreshing(true);
    // API.events
    //   .getDetails(route.params.id)
    //   .then(setEvent)
    //   .finally(() => {
    //     setIsRefreshing(false);
    //   });
  }, [route?.params?.id]);

  if (isRefreshing) {
    return (
      <View>
        <Text>Загрузка</Text>
      </View>
    );
  }

  // if (event === null) {
  //   return (
  //     <View>
  //       <Text>
  //         Что-то пошло не так. Либо такого конкурса нет, либо он Вам недоступен
  //       </Text>
  //     </View>
  //   );
  // }

  const mock: NominationResponseDto[] = [
    {title: 'Лучший шпагат', description: ''},
    {title: 'Мисс Россия', description: ''},
    {title: 'Мистер Олимпия', description: ''},
  ];
  // const mock = [];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Хакатон studhack</Text>
      <Section>
        <View style={styles.dateWrapper}>
          <Icon
            name={'calendar'}
            color={'gray'}
            size={18}
            style={styles.dateIcon}
          />
          <Text style={styles.date}>Декабрь 12, 2021г.</Text>
        </View>
      </Section>
      <Section>
        <UsersStack
          avatars={[
            'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
            'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
            'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
          ]}
        />
      </Section>
      <Section title="О мероприятии">
        <Text style={styles.text}>Сидим чиллим на тусе</Text>
      </Section>
      <Section title="Номинации">
        <NominationsList data={mock} />
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
