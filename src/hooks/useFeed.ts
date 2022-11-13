import {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import parse from 'rss-to-json';
import {singleNews} from '../types/feed';

export const useFeed = () => {
  const [allFeed, setAllFeed] = useState<singleNews[]>();
  const [feed, setFeed] = useState<singleNews[]>();
  const [loading, setLoading] = useState(false);

  const getFeed = useCallback(async () => {
    const rss = await parse(
      'https://e00-elmundo.uecdn.es/elmundo/rss/espana.xml',
    );
    if (rss) {
      const orderedFeed = orderByDate(rss.items);
      await AsyncStorage.setItem('feed', JSON.stringify(orderedFeed));
      setAllFeed(orderedFeed);
      setFeed(orderedFeed);
    } else {
      const storedRSS = await AsyncStorage.getItem('feed');
      setAllFeed(JSON.parse(storedRSS || ''));
      setFeed(JSON.parse(storedRSS || ''));
    }
  }, []);

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  const orderByDate = (feedToOrder: singleNews[]) => {
    return feedToOrder.sort((a, b) => a.published - b.published);
  };

  const filter = (text: string) => {
    const filteredFeed = allFeed?.filter(item =>
      normalizeText(item.title).includes(normalizeText(text)),
    );
    setFeed(filteredFeed);
  };

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const updateFeed = () => {
    setLoading(true);
    getFeed();
    setLoading(false);
  };

  return {
    feed,
    updateFeed,
    loading,
    filter,
  };
};
