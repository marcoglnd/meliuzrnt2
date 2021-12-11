import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import IsAuth from '../../components/IsAuth';

const dash: React.FC = () => {
  return (
    <View style={styles.default}>
      <IsAuth />
      <Text>Dashboard</Text>
    </View>
  );
};

export default dash;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
