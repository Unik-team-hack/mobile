import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';

import {API} from '@/api';
import {NominationResponseDto, UserResponseDto} from '@/api/dto';
import {UserInNominationItem} from '@/components/UserInNominationItem';
import {NavigationProp, RouteProp} from '@react-navigation/core';
import {MAIN_ROUTES} from '@/navigation/MainScreen/types';

const mock: UserResponseDto[] = [
  {
    image:
      'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
    hasEditAccess: true,
  },
  {
    image:
      'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
    hasEditAccess: true,
    hasFullMark: true,
    mark: 90,
  },
  {
    image:
      'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
    hasEditAccess: true,
  },
  {
    image:
      'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
    hasEditAccess: true,
  },
];

const renderItem: ListRenderItem<UserResponseDto> = ({item}) => (
  <UserInNominationItem {...item} />
);

interface NominationScreenProps {
  navigation: NavigationProp<any, MAIN_ROUTES.NOMINATION>;
  route: RouteProp<{params: {id: string}}, 'params'>;
}

export const NominationScreen = ({route}: NominationScreenProps) => {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [data, setData] = React.useState<NominationResponseDto | null>(null);

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    API.nominations
      .getById(route.params.id)
      .then(setData)
      .finally(() => {
        setIsRefreshing(false);
      });
  }, [route.params.id]);

  React.useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  return (
    <FlatList
      data={data?.users}
      renderItem={renderItem}
      ListHeaderComponent={() => (
        <View>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.text}>{data?.description}</Text>
        </View>
      )}
      ListHeaderComponentStyle={styles.header}
      ItemSeparatorComponent={Separator}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
    />
  );
};

const Separator = () => <View style={styles.sep} />;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  header: {
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  sep: {
    backgroundColor: '#eee',
    height: 1,
    marginLeft: 72,
  },
  text: {
    color: 'grey',
  },
});
