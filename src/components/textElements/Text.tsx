import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text} from 'react-native';

type DescriptionProps = PropsWithChildren<{
  numberOfLines?: number;
}>;

const Title = ({children}: PropsWithChildren) => {
  return <Text style={styles.title}>{children}</Text>;
};

const Description = ({children, numberOfLines}: DescriptionProps) => {
  return (
    <Text numberOfLines={numberOfLines} style={styles.description}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
    marginTop: 10,
  },
});

type TextProps = {
  Title: ({children}: PropsWithChildren) => JSX.Element;
  Description: ({children, numberOfLines}: DescriptionProps) => JSX.Element;
};

export const TextElements: TextProps = {
  Title,
  Description,
};
