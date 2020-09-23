import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';
import AppVoteButton from './AppVoteButton';

function AppCard({
  title,
  subtitle,
  image,
  onPress,
  onUpvotes,
  onDownvotes,
  onSaved,
  votesCount,
  saved,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
          <AppVoteButton
            icon={saved === true ? 'heart' : 'hearto'}
            onPress={onSaved}
            color={colors.primary}
          />
        </View>
        <View style={styles.button}>
          <AppVoteButton icon="caretup" onPress={onUpvotes} />
          <AppText style={styles.votes}>{votesCount}</AppText>
          <AppVoteButton icon="caretdown" onPress={onDownvotes} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  votes: {marginRight: 14},
  button: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
    width: '80%',
  },
  title: {
    marginBottom: 9,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    marginBottom: 9,
  },
});

export default AppCard;
