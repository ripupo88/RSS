import React, {PropsWithChildren} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type SearchProps = PropsWithChildren<{
  onChangeText?: ((text: string) => void) | undefined;
}>;

export const Search = ({onChangeText, children}: SearchProps) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputBox}>
        <TextInput style={styles.search} onChangeText={onChangeText} />
        {children && <View style={styles.icon}>{children}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  search: {
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    flex: 0,
    marginRight: 10,
    justifyContent: 'center',
  },
  inputBox: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#00000044',
  },
});
