import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import AppCard from '../components/AppCard';
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppScreen from '../components/AppScreen';
import {
  saveTopic,
  upvoteTopic,
  downvoteTopic,
  unsaveTopic,
  toggleLike,
} from '../redux/topic';

function FeedScreen({navigation}) {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state);

  const saveTopicBtnClick = (id) => dispatch(saveTopic(id));
  const upvoteBtnClick = (id) => dispatch(upvoteTopic(id));
  const downvoteBtnClick = (id) => dispatch(downvoteTopic(id));
  const unsaveTopicBtnClick = (id) => dispatch(unsaveTopic(id));
  const toggle = (id) => dispatch(toggleLike(id));

  console.log('TOPICS', topics);
  return (
    <AppScreen style={styles.screen}>
      {topics.length <= 0 ? (
        <AppText> No Topic found! Create a new topic now! </AppText>
      ) : (
        <FlatList
          data={topics}
          keyExtractor={(topic) => topic.id.toString()}
          renderItem={({item}) => (
            <AppCard
              votesCount={item.votesCount}
              title={item.topic.topicTitle}
              subtitle={item.topic.topicURL}
              image={item.image}
              saved={item.saved}
              onPress={() => navigation.navigate('Topic Detail', item)}
              onUpvotes={() => upvoteBtnClick(item.id)}
              onDownvotes={() => downvoteBtnClick(item.id)}
              // onSaved={() =>
              //   item.saved === false
              //     ? saveTopicBtnClick(item.id)
              //     : unsaveTopicBtnClick(item.id)
              // }
              onSaved={() => toggle(item.id)}
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

export default FeedScreen;
