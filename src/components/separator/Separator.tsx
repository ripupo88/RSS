import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#00000036',
    marginTop: 40,
  },
});
