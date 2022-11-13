import React, {PropsWithChildren} from 'react';
import {
  Image,
  Linking,
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {TextButton} from '../../components/buttons/TextButton';
import {TextElements} from '../../components/textElements/Text';
import {DEFAULT_URL} from '../../constants/defaultImg';

import {singleNews} from '../../types/feed';

type DetailProps = PropsWithChildren<{
  item: singleNews;
}>;

export const Detail = ({item, children}: DetailProps) => {
  const {title, media, description} = item;
  console.log(title, media, description);
  const url = media?.thumbnail?.url || DEFAULT_URL;
  const Txt = TextElements;
  return (
    <Modal>
      <SafeAreaView>
        {children}
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
        <View style={styles.textBox}>
          <Txt.Title>{title}</Txt.Title>
          <Txt.Description>{description.split('&nbsp')[0]}</Txt.Description>
        </View>
        <View style={styles.button}>
          <TextButton
            onPress={() => Linking.openURL(item.link)}
            text="Ver en el navegador"
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', height: 250},
  button: {alignItems: 'center'},
  textBox: {padding: 15},
});
