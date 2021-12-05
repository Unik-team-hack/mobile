import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MarkForm} from '@/components/MarkForm';
import {CriteriaResponseDto} from '@/api/dto';
import {ScrollView} from 'react-native-gesture-handler';
import { API } from '@/api';

type CritWithMark = Pick<
  CriteriaResponseDto,
  'title' | 'maxValue' | 'description'
> & {
  mark?: number;
};

const mock: CritWithMark[] = [
  {title: 'Импровизация', maxValue: 4},
  {title: 'Подготовка', maxValue: 5},
  {title: 'Внешний вид', maxValue: 3},
  {title: 'Внешний вид', maxValue: 6},
  {title: 'Внешний вид', maxValue: 20},
  {title: 'Внешний вид', maxValue: 7},
  {title: 'Внешний вид', maxValue: 7},
  {title: 'Внешний вид', maxValue: 7},
  {title: 'Внешний вид', maxValue: 7},
  {title: 'Внешний вид', maxValue: 7},
  {title: 'Внешний вид', maxValue: 7},
  {title: 'Внешний вид', maxValue: 7},
];

export const AssessmentScreen = () => {
  const [crits, setCrits] = React.useState<CritWithMark[]>(mock);

  useEffect(() => {
    // setCrits( API.nominations.getCriterias(id))
  }, [])

  const onSelect = React.useCallback((ind: number, val: number) => {
    setCrits(curr => {
      curr[ind].mark = val;
      return [...curr];
    });
    // API.marks.setMark(crits[ind].id, userId, val)
  }, []);

  return (
    <ScrollView style={styles.wrapper}>
      {crits.map((x, ind) => (
        <View key={ind} style={styles.block}>
          <Text style={styles.title}>{x.title}</Text>
          {x.description && <Text>{x.description}</Text>}
          <MarkForm
            max={x.maxValue}
            selected={x.mark}
            onSelect={val => onSelect(ind, val)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  block: {
    marginBottom: 8,
  },
});
