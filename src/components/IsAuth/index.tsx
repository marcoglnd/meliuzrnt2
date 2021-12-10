import React from 'react';
import {useSelector} from 'react-redux';
import { View, Text } from 'react-native';

import { IAuth } from '../../types';

const IsAuth: React.FC = () => {
  const globalState = useSelector((state: IAuth) => state);

  return (
    <View>
      <Text>Está autenticado?{globalState ? 'sim' : 'não'}</Text>
    </View>
  )
}

export default IsAuth;