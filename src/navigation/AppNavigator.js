import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import FeedNavigator from './FeedNavigator';
import AddTopicScreen from '../screens/AddTopicScreen';
import SavedTopicNavigator from './SavedTopicNavigator';
import NewTopicButton from './NewTopicButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="AddTopic"
      component={AddTopicScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewTopicButton onPress={() => navigation.navigate('AddTopic')} />
        ),
      })}
    />
    <Tab.Screen
      name="Saved"
      component={SavedTopicNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="heart" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
