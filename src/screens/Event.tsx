import React, { useContext } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {EventStatus, ExtendedEventResponseDto, NominationResponseDto} from '@/api/dto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UsersStack} from '@/components/UsersStack';
import {NominationsList} from '@/components/NominationsList';
import {API} from '@/api';
import {NavigationProp, RouteProp} from '@react-navigation/core';
import {MAIN_ROUTES} from '@/navigation/MainScreen/types';
import {Section} from '@/components/Section';
import {formatDate} from '@/utils';
import { Button } from '@/components/Button';
import ProfileStore from '@/store/ProfileStore';

interface EventScreenProps {
  navigation: NavigationProp<any, MAIN_ROUTES.EVENT_DETAIL>;
  route: RouteProp<{params: {id: string}}, 'params'>;
}

export const EventScreen = ({route}: EventScreenProps) => {
  const {user, fetchUser} = useContext(ProfileStore)

  const [event, setEvent] = React.useState<ExtendedEventResponseDto | null>(
    null,
  );
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  React.useEffect(() => {
    setIsRefreshing(true);
    fetchUser()
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

  console.log(user?.admin)

  const header = 
  <>
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
    <Section title="Номинации"/>
  </>

  const buttonTitle = (() => {
    switch(event.status) {
      case 'In progress':
        return 'Остановить голосование'
      case 'Fixed':
        return 'Опубликовать результаты'
    }
    return null
  })()

  const onPress = async () => {
    const newStatus = event.status === 'In progress' ? 'Fixed' : 'Ended'
    await API.events.setStatus(event.id, newStatus)
  }

  return (
    <View style={styles.wrapper}>
        
      <NominationsList ListHeaderComponent={header} data={event.nominations}/>
      { user?.admin && buttonTitle && <View style={styles.buttonWrapper}>
         <Button text={buttonTitle} onPress={onPress} />
         </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flex:1,
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
  buttonWrapper:{
    position:'absolute',
    left:0,
    right:0,
    marginHorizontal:16,
    marginBottom:4,
    bottom:0,
    zIndex:1,
  }
});
