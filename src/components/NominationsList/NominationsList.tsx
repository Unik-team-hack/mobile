import React, { useContext } from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import type {NominationResponseDto} from '@/api/dto';
import {Separator} from '../Separator';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList, MAIN_ROUTES} from '@/navigation/MainScreen/types';
import {CoreTabsParamList, CORE_ROUTES} from '@/navigation/types';
import ProfileStore from '@/store/ProfileStore';

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<CoreTabsParamList, CORE_ROUTES.EVENT>,
  StackNavigationProp<MainStackParamList>
>;

const NominationItem = ({title, id}: NominationResponseDto) => {
  const navigation = useNavigation<NavigationProp>();
  const go = () => navigation.push(MAIN_ROUTES.NOMINATION, {id});

  return (
    <TouchableOpacity style={styles.wrapper} onPress={go}>
      <Text style={styles.text}>{title}</Text>
      <Icon name={'chevron-right'} color={'#ccc'} size={16} />
    </TouchableOpacity>
  );
};

const renderItem: ListRenderItem<NominationResponseDto> = ({item}) => {
  return <NominationItem {...item} />;
};

interface NominationsListProps {
  data: NominationResponseDto[];
  ListHeaderComponent: React.ReactElement
}

export const NominationsList = ({data, ListHeaderComponent}: NominationsListProps) =>{ 
  const {user, fetchUser} = useContext(ProfileStore)
  
  return (
  <FlatList
    data={data}
    renderItem={renderItem}
    ListHeaderComponent={ListHeaderComponent}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={
      <Text style={styles.empty}>Пока что нет ни одной номинации</Text>
    }
    ListFooterComponent={user?.admin ? <View style={styles.footer}/> : null}
    ItemSeparatorComponent={Separator}
  />
);}

const styles = StyleSheet.create({
  empty: {
    color: 'grey',
  },
  wrapper: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {fontSize: 16},
  footer:{
    height:64, 
  }  
});
