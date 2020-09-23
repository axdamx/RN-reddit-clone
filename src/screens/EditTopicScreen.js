import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import {useDispatch} from 'react-redux';
import {updateTopic} from '../redux/topic';

function EditTopicScreen({navigation, route}) {
  const dispatch = useDispatch();
  const data = route.params;
  const [topicTitle, setTopicTitle] = useState(data.topic.topicTitle);
  const [topicURL, setTopicURL] = useState(data.topic.topicURL);

  const updateTopicBtnClick = (note, id) => dispatch(updateTopic(note, id));

  const createBtnClick = (note) => {
    Alert.alert(
      'Success!',
      'Topic Updated!',
      [{text: 'OK', onPress: () => onClickSuccess(note)}],
      {cancelable: false},
    );
  };

  const onClickSuccess = (note) => {
    updateTopicBtnClick(note, data.id);
    navigation.navigate('Feed');
    setTopicTitle('');
    setTopicURL('');
  };
  return (
    <AppScreen style={styles.container}>
      <AppTextInput
        icon="pluscircle"
        placeholder="Title"
        defaultValue={data.topic.topicTitle}
        mode="outlined"
        onChangeText={setTopicTitle}
      />
      <AppTextInput
        icon="pluscircle"
        placeholder="URL"
        defaultValue={data.topic.topicURL}
        mode="outlined"
        onChangeText={setTopicURL}
      />
      <AppButton
        disabled={false}
        title="Save"
        onPress={() => createBtnClick({topicTitle, topicURL})}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
});

export default EditTopicScreen;
