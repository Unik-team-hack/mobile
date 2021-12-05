import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';

import {API} from '@/api';
import {EventStatus, NominationResponseDto, UserResponseDto} from '@/api/dto';
import {UserInNominationItem} from '@/components/UserInNominationItem';
import {NavigationProp, RouteProp} from '@react-navigation/core';
import {MAIN_ROUTES} from '@/navigation/MainScreen/types';


const renderItem: ListRenderItem<UserResponseDto> = ({item}) => (
  // <UserInNominationItem {...item} hasViewAccess={item.eventStatus==='Ended'} hasEditAccess={item.eventStatus==='In Progress' && item.role==='ACCESSOR'} />
  // <UserInNominationItem {...item} hasViewAccess={item.eventStatus==='Ended'} hasEditAccess={item.eventStatus==='In Progress' && item.role==='ACCESSOR'} />
  <UserInNominationItem {...item} hasViewAccess={item.eventStatus==='Ended'} hasEditAccess={true} />

  );

interface NominationScreenProps {
  navigation: NavigationProp<any, MAIN_ROUTES.NOMINATION>;
  route: RouteProp<{params: {id: string, role:string, eventStatus:EventStatus}}, 'params'>;
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
      data={data?.users.map(user=>({...user, role: route.params.role, eventStatus:route.params.eventStatus, nominationId:data.id}))}
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
