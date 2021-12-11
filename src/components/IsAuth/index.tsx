import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TextInput} from 'react-native';

import {IAuth} from '../../types';

interface IGambeta {
  auth: IAuth;
}

const IsAuth: React.FC = () => {
  const globalState = useSelector((state: IGambeta) => state.auth);
  return (
    <View>
      <Text>Está autenticado?{globalState ? 'sim' : 'não'}</Text>
      <Text>{globalState?.auth.user.name}</Text>
      <TextInput placeholder="Old password" />
      <TextInput placeholder="New password" />
      <TextInput placeholder="Confirm new password" />
    </View>
  );
};

export default IsAuth;
