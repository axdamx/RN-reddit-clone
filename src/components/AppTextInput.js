import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';

function AppTextInput({icon, width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width: width}]}>
      {icon && (
        <Icon name={icon} size={20} color={colors.medium} style={styles.icon} />
      )}
      <TextInput style={styles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.dark,
  },
});

export default AppTextInput;
