import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TopicDetailScreen from '../screens/TopicDetailScreen';
import SavedTopicScreen from '../screens/SavedTopicScreen';

const Stack = createStackNavigator();

const SavedTopicNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Saved Topic" component={SavedTopicScreen} />
    <Stack.Screen name="Topic Detail" component={TopicDetailScreen} />
  </Stack.Navigator>
);

export default SavedTopicNavigator;
