import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CreateEventButton = () => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.text}>Создать</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0518a1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {textAlign: 'center', color: 'white', fontWeight: '500'},
});
