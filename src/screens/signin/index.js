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
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import api from '../../services';

export default function SignIn() {
  const [token, setToken] = useState({});
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  const handleLogin = () => {
    api
      .post('session', user, {
        headers: {
          ContentType: 'application/json',
        },
      })
      .then(res => {
        console.log(res.data);
        setToken(res.data);
        setTimeout(() => {
          navigation.navigate('dash');
        }, 1500);
      })
      .catch(err => console.log(err))
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
        <Text>Faça seu login</Text>
        <View style={styles.card}>
          <Text style={styles.title}>Logar</Text>
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
            <Button title="Entrar" onPress={handleLogin} />
          </View>
        </View>
        <View>
          <Text>Ainda não possui conta?</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text>Cadastre-se</Text>
          </TouchableOpacity>
          <Text>{token?.token}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  default: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
