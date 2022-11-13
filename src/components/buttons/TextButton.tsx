import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type TextButtonProps = {
  onPress: () => void;
  text: string;
};
export const TextButton = ({onPress, text}: TextButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  button: {
    padding: 5,
    backgroundColor: '#2f2fff99',
    borderRadius: 5,
    width: 220,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    position: 'relative',
    zIndex: 999,
    margin: 10,
  },
});
