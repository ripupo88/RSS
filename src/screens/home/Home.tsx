import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {BackButton} from '../../components/buttons/BackButton';
import {Icons} from '../../components/icons/Icons';
import {Search} from '../../components/Search/Search';
import {Section} from '../../components/section/Section';
import {Separator} from '../../components/separator/Separator';
import {useFeed} from '../../hooks/useFeed';
import {singleNews} from '../../types/feed';
import {Detail} from '../detail/Detail';

export const Home = () => {
  const {feed, filter, updateFeed, loading} = useFeed();
  const [detail, setDetail] = useState<singleNews>();

  const handleDetail = (item: singleNews) => {
    setDetail(item);
  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <StatusBar barStyle={'dark-content'} />
      {detail && (
        <Detail item={detail}>
          <BackButton onPress={() => setDetail(undefined)} />
        </Detail>
      )}
      <Search onChangeText={filter}>
        <Icons.SearchIcon color={'#000000'} size={25} />
      </Search>

      <FlatList
        data={feed}
        refreshControl={
          <RefreshControl onRefresh={updateFeed} refreshing={loading} />
        }
        style={styles.flatList}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleDetail(item)} key={item.link}>
            <Section
              title={item.title}
              link={item?.media?.thumbnail?.url}
              description={item.description.split('&nbsp')[0]}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {flex: 1},
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
