import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 3,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: '#24292e'
  },
  tabText: {
    color: '#0366d6',
    fontSize: 20
  }
});


const AppBar = ({joo}) => {
  return <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => {console.log('tab pressed');}}>
      <Text style={styles.tabText}>{joo}</Text>
      </TouchableWithoutFeedback>
    </View>;
};

export default AppBar;
