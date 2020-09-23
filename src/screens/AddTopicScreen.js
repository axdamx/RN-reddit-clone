import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTopic} from '../redux/topic';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

function AddTopicScreen({navigation}) {
  const dispatch = useDispatch();

  const [topicTitle, setTopicTitle] = useState('');
  const [topicURL, setTopicURL] = useState('');

  const addTopicBtnClick = (note) => dispatch(addTopic(note));

  const createBtnClick = (note) => {
    Alert.alert(
      'Success!',
      'New Topic Added!',
      [{text: 'OK', onPress: () => onClickSuccess(note)}],
      {cancelable: false},
    );
  };

  const onClickSuccess = (note) => {
    addTopicBtnClick(note);
    navigation.navigate('Feed');
    setTopicTitle('');
    setTopicURL('');
  };
  return (
    <AppScreen style={styles.container}>
      <AppText style={styles.title}> Create a new topic here </AppText>
      <AppTextInput
        icon="pluscircle"
        placeholder="Title"
        value={topicTitle}
        mode="outlined"
        onChangeText={setTopicTitle}
      />
      <AppTextInput
        icon="pluscircle"
        placeholder="URL"
        value={topicURL}
        mode="outlined"
        onChangeText={setTopicURL}
      />
      <AppButton
        disabled={false}
        title="Create"
        onPress={() => createBtnClick({topicTitle, topicURL})}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    margin: 10,
  },
});

export default AddTopicScreen;
