import { useNavigation } from '@react-navigation/native';
import React from 'react';

export const IsRedirect = (value: string) => {
  const navigation: void | any = useNavigation();

  if (!!value){
    navigation.navigate('dash');
  }
};
