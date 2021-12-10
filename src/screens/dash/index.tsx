import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

import IsAuth from '../../components/IsAuth';

const dash: React.FC = () => {
  return (
    <View>
      <IsAuth />
      <Text>Dashboard</Text>
    </View>
  );
}

export default dash;

const styles = StyleSheet.create({
  default: {
    height: Dimensions.get('window').height,
  }
})