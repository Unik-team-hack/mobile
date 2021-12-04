import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';

import {UserResponseDto} from '@/api/dto';
import {UserInNominationItem} from '@/components/UserInNominationItem';

const renderItem: ListRenderItem<UserResponseDto> = ({item}) => {
  return <UserInNominationItem {...item} />;
};

export const NominationScreen = () => {
  const [data, setData] = React.useState<UserResponseDto[]>([
    {
      image:
        'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
      needMark: true,
    },
    {
      image:
        'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
      needMark: true,
      hasFullMark: true,
      mark: 9,
    },
    {
      image:
        'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
      needMark: true,
    },
    {
      image:
        'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
      needMark: true,
    },
  ]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={() => (
        <View>
          <Text style={styles.title}>Юмор</Text>
          <Text style={styles.text}>
            Номинация для самых весёлых и находчивых
          </Text>
        </View>
      )}
      ListHeaderComponentStyle={styles.header}
      style={styles.wrapper}
      ItemSeparatorComponent={Separator}
    />
  );
};

const Separator = () => <View style={styles.sep} />;

const styles = StyleSheet.create({
  wrapper: {
    // paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
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
