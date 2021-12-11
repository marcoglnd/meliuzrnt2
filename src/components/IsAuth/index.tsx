import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';

import {IAuth} from '../../types';

import {useNavigation} from '@react-navigation/native';

interface IGambeta {
  auth: IAuth;
}

const IsAuth: React.FC = () => {
  const globalState = useSelector((state: IGambeta) => state);
  const navigation: void | any = useNavigation();

  const handleChangePassword = () => {
    navigation.navigate('changepassword');
  };

  return (
    <View>
      <Text>Está autenticado?{globalState ? 'sim' : 'não'}</Text>
      <TouchableOpacity onPress={handleChangePassword}>
        <Text>Trocar senha</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IsAuth;
