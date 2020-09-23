import React from 'react';
import {View, Image, StyleSheet, Alert, TouchableOpacity} from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import {useDispatch} from 'react-redux';
import {deleteTopic} from '../redux/topic';

function TopicDetailScreen({route, navigation}) {
  const dispatch = useDispatch();
  const data = route.params;

  const createBtnClick = (note) => {
    Alert.alert(
      'Warning!',
      'Are you sure you want to delete it?',
      [
        {text: 'OK', onPress: () => onDeleteSuccess(note)},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const onDeleteSuccess = (id) => {
    dispatch(deleteTopic(id));
    navigation.navigate('Feed');
  };

  const openWebview = () => {
    Alert.alert(
      'Warning!',
      'This will bring you to another view',
      [
        {text: 'OK', onPress: () => navigation.navigate('WebView', data)},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View>
      {/* <Image style={styles.image} source={listing.image} /> */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> {data.topic.topicTitle} </AppText>
        <TouchableOpacity onPress={openWebview}>
          <AppText style={styles.url}>{data.topic.topicURL}</AppText>
        </TouchableOpacity>
        <AppText style={styles.info}>Votes Count : {data.votesCount}</AppText>
        <AppText style={styles.info}>
          {data.saved === true
            ? 'You liked this!'
            : 'Nobody liked this topic yet..'}
        </AppText>
        <View style={styles.userContainer}>
          <AppButton title="Delete" onPress={() => createBtnClick(data.id)} />
          <AppButton
            title="Edit"
            onPress={() => navigation.navigate('Edit Topic', data)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  info: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },
  url: {
    color: colors.danger,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default TopicDetailScreen;
