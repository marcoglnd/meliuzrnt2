import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';

import { useDispatch } from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import api from '../../services';
import {getToken} from '../../store/modules/auth/action';
import { IUser } from '../../types';

interface IToken {
  token: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigation: void | any = useNavigation();

  const handleLogin = () => {
    api
      .post('session', user, {
        headers: {
          ContentType: 'application/json',
        },
      })
      .then(res => {
        dispatch(getToken(res.data?.token));
        setTimeout(() => {
          navigation.navigate('dash');
        }, 1500);
      })
      .catch(err => console.warn())
      .finally(() => {
        setUser({
          email: '',
          password: '',
        });
      });
  };

  const handleRegister = () => {
    navigation.navigate('Cadastre-se');
  };

  return (
    <SafeAreaView>
      <View style={styles.default}>
        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>
          <View>
            <TextInput
              placeholder="Informe seu e-mail"
              value={user.email}
              onChangeText={e => setUser({...user, email: e})}
            />
            <TextInput
              placeholder="Informe sua senha"
              value={user.password}
              secureTextEntry={true}
              onChangeText={e => setUser({...user, password: e})}
            />
            <Button title="Entrar" onPress={handleLogin} color="#2a2a2a" accessibilityLabel="Fazer login"/>
          </View>
        </View>
        <View>
          <Text>Ainda não possui conta?</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  default: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FECAD6',
    paddingHorizontal: 45,
    paddingVertical: 45,
    borderRadius: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
