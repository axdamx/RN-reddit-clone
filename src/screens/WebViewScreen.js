import React from 'react';
import {StyleSheet} from 'react-native';

import colors from '../config/colors';
import AppScreen from '../components/AppScreen';
import AppWebView from '../components/AppWebView';

function WebViewScreen({navigation, route}) {
  const data = route.params;
  return (
    <AppScreen style={styles.screen}>
      <AppWebView uri={data.topic.topicURL} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
    flex: 1,
  },
});

export default WebViewScreen;
