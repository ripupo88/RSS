import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icons} from '../icons/Icons';

type BackButtonProps = {
  onPress: () => void;
};

export const BackButton = ({onPress}: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icons.BackArrowIcon color={'#000000'} size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    backgroundColor: '#ffffff55',
    borderRadius: 100,
    width: 40,
    height: 40,
    position: 'relative',
    zIndex: 999,
    margin: 10,
  },
});
