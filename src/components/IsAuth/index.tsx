import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';

import {IAuth} from '../../types';

import {useNavigation} from '@react-navigation/native';

import {logOut} from '../../store/modules/auth/action';

interface IGambeta {
  auth: IAuth;
}

const IsAuth: React.FC = () => {
  const globalState = useSelector((state: IGambeta) => state);
  const navigation: void | any = useNavigation();
  const dispatch = useDispatch();

  const handleChangePassword = () => {
    navigation.navigate('changepassword');
  };

  const handleLogOut = () => {
    dispatch(
      logOut({
        token: '',
        user: {
          name: '',
          email: '',
          id: 0,
        },
      }),
    );
    navigation.navigate('Entrar');
  };

  return (
    <View>
      <Text>Está autenticado?{globalState ? 'sim' : 'não'}</Text>
      <TouchableOpacity onPress={handleChangePassword}>
        <Text>Trocar senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IsAuth;
