import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

function AppWebView({style, uri}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <WebView source={{uri: uri}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default AppWebView;
