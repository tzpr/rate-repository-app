import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => { 
  return (
    <View style={styles.container}>
      <Text>Rate Repository App</Text>
      <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
      <Text fontWeight="bold" fontSize="subheading">Bold subheading
      </Text>
      <Text color="primary">Text with primary color</Text>
      <RepositoryList/>
    </View>
  );
};

export default Main;
