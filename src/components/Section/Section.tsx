import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SectionProps {
  title?: string;
}

export const Section: FC<SectionProps> = ({title, children}) => (
  <View style={styles.section}>
    {title && <Text style={styles.h2}>{title}</Text>}
    {children}
  </View>
);

const styles = StyleSheet.create({
  h2: {
    fontWeight: '600',
    marginBottom: 4,
  },
  section: {
    marginTop: 16,
  },
});
