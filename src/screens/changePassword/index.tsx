import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import api from '../../services';

import {IAuth} from '../../types';

import {useNavigation} from '@react-navigation/native';

interface IGambeta {
  auth: IAuth;
}

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation: void | any = useNavigation();
  const globalState = useSelector((state: IGambeta) => state);

  const handleChangePassword = () => {
    const credentials = {
      oldPassword,
      password: newPassword,
      confirmPassword,
    };
    api
      .put('users', credentials, {
        headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${globalState.auth.token}`,
        },
      })
      .then(() => {
        navigation.navigate('Entrar');
      })
      .catch(err => console.warn(err));
  };

  return (
    <View style={styles.container}>
      <Text>ChangePassword</Text>
      <TextInput
        placeholder="Old password"
        value={oldPassword}
        onChangeText={e => setOldPassword(e)}
      />
      <TextInput
        placeholder="New password"
        value={newPassword}
        onChangeText={e => setNewPassword(e)}
      />
      <TextInput
        placeholder="Confirm new password"
        value={confirmPassword}
        onChangeText={e => setConfirmPassword(e)}
      />
      <TouchableOpacity onPress={handleChangePassword}>
        <Text>Change password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChangePassword;
