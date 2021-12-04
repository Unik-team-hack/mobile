import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

interface MarkFormProps {
  max: number;
  selected?: number;
  onSelect: (a: number) => void;
}

export const MarkForm = ({max, selected, onSelect}: MarkFormProps) => (
  <ScrollView
    style={styles.wrapper}
    horizontal
    contentContainerStyle={styles.contentContainerStyle}>
    {Array.from({length: max + 1}).map((_, i) => (
      <TouchableOpacity
        style={[styles.mark, selected === i && styles.selected]}
        key={i}
        onPress={() => onSelect(i)}>
        <Text style={[styles.val, selected === i && styles.selectedVal]}>
          {i}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 12,
    marginLeft: -6,
  },
  contentContainerStyle: {
    alignItems: 'flex-start',
  },
  mark: {
    aspectRatio: 1,
    borderRadius: 8,
    borderColor: '#eee',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 46,
    minWidth: 32,
    width: 40,
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: '#0518a1',
    borderColor: '#0518a1',
  },
  val: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedVal: {
    color: 'white',
  },
});
