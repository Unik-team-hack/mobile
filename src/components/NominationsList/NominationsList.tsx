import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import type {NominationResponseDto} from '@/api/dto';

const renderItem: ListRenderItem<object> = () => <View />;

interface NominationsListProps {
  data: NominationResponseDto[];
}

export const NominationsList = ({data}: NominationsListProps) => (
  <FlatList
    data={data}
    renderItem={renderItem}
    ListEmptyComponent={
      <Text style={styles.empty}>Пока что нет ни одной номинации</Text>
    }
  />
);

const styles = StyleSheet.create({
  empty: {
    color: 'grey',
  },
});
