import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DEFAULT_URL} from '../../constants/defaultImg';
import {TextElements} from '../textElements/Text';

export const Section: React.FC<{
  title: string;
  link: string;
  description: string;
}> = ({title, link, description}) => {
  const Txt = TextElements;
  return (
    <View style={styles.sectionContainer}>
      <Txt.Title>{title}</Txt.Title>
      <Txt.Description numberOfLines={2}>{description}</Txt.Description>
      <Image
        style={styles.image}
        source={{
          uri: link || DEFAULT_URL,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', height: 200},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
  },
});
