import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import AppCard from '../components/AppCard';
import colors from '../config/colors';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import {
  saveTopic,
  upvoteTopic,
  downvoteTopic,
  unsaveTopic,
} from '../redux/topic';

function SavedTopicScreen({navigation}) {
  const dispatch = useDispatch();

  const saved = useSelector((state) =>
    state.filter((topic) => topic.saved === true),
  );

  const saveTopicClick = (id) => dispatch(saveTopic(id));
  const upvoteButtonClick = (id) => dispatch(upvoteTopic(id));
  const downvoteButtonClick = (id) => dispatch(downvoteTopic(id));
  const unsaveTopicClick = (id) => dispatch(unsaveTopic(id));
  return (
    <AppScreen style={styles.screen}>
      {saved.length <= 0 ? (
        <AppText>
          No saved topic found! Save a topic from the feed screen!
        </AppText>
      ) : (
        <FlatList
          data={saved}
          keyExtractor={(topic) => topic.id.toString()}
          renderItem={({item}) => (
            <AppCard
              saved={item.saved}
              votesCount={item.votesCount}
              title={item.topic.topicTitle}
              subtitle={item.topic.topicURL}
              image={item.image}
              onPress={() => navigation.navigate('Topic Detail', item)}
              onUpvotes={() => upvoteButtonClick(item.id)}
              onDownvotes={() => downvoteButtonClick(item.id)}
              onSaved={() =>
                item.saved === false
                  ? saveTopicClick(item.id)
                  : unsaveTopicClick(item.id)
              }
            />
          )}
        />
      )}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default SavedTopicScreen;
