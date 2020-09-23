import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FeedScreen from '../screens/FeedScreen';
import TopicDetailScreen from '../screens/TopicDetailScreen';
import EditTopicScreen from '../screens/EditTopicScreen';
import WebViewScreen from '../screens/WebViewScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={FeedScreen} />
    <Stack.Screen name="Topic Detail" component={TopicDetailScreen} />
    <Stack.Screen name="Edit Topic" component={EditTopicScreen} />
    <Stack.Screen name="WebView" component={WebViewScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
