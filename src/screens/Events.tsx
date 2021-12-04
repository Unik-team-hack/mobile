import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {API} from '@/api';
import {EventResponseDto} from '@/api/dto';
import {EventItem} from '@/components/EventItem';
import {Separator} from '@/components/Separator';
import {CreateEventButton} from '@/components/CreateEventButton';

export const EventsScreen = () => {
  const [events, setEvents] = React.useState<EventResponseDto[]>([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  React.useEffect(() => {
    API.events.getList().then(setEvents);
  }, []);

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    API.events
      .getList()
      .then(setEvents)
      .finally(() => {
        setIsRefreshing(false);
      });
  }, []);

  return (
    <FlatList
      data={events}
      renderItem={({item}) => <EventItem {...item} />}
      style={styles.list}
      ItemSeparatorComponent={Separator}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      ListHeaderComponent={<CreateEventButton />}
    />
  );
};

const styles = StyleSheet.create({
  list: {paddingVertical: 8, marginHorizontal: 8},
});
