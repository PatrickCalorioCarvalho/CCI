import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../services/api';

function SignIn({navigation}: {navigation: any}): React.JSX.Element {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    return Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Submit = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Erro', 'Preencha Todos os Campos');
      return;
    }
    setIsLoading(true);
    try {
      const response = await login.post('login/', {
        username,
        password,
      });

      if (response.status === 200) {
        await AsyncStorage.setItem('my-token', response.data.token);
        navigation.navigate('Main');
      } else {
        Alert.alert('Erro', 'Login e Senha Invalido!');
        setIsLoading(false);
      }
    } catch (error) {
      Alert.alert('Erro', 'Login e Senha Invalido! ' + error);
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onChangeusernameHandler = (username: string) => {
    setusername(username);
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onChangepasswordHandler = (password: string) => {
    setpassword(password);
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require('./../assets/cci-logo.png')}
        />
      </View>
      <Animated.View
        style={[
          styles.container,
          {opacity: opacity, transform: [{translateY: offset.y}]},
        ]}>
        <Text style={styles.welcome}> Seja Bem-Vindo</Text>
        <TextInput
          style={styles.input}
          placeholder="Login"
          autoCorrect={false}
          value={username}
          editable={!isLoading}
          onChangeText={onChangeusernameHandler}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          value={password}
          editable={!isLoading}
          onChangeText={onChangepasswordHandler}
        />
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={Submit}
          disabled={isLoading}>
          <Text>Acessar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4EDE0',
  },
  containerLogo: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    fontSize: 30,
    color: '#003471',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 20,
    color: '#222',
    fontSize: 17,
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    elevation: 20,
  },
  btnSubmit: {
    backgroundColor: '#01E7BB',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    width: '25%',
    height: 35,
    borderRadius: 20,
    color: '#003471',
  },
  logo: {
    width: 300,
    height: 120,
  },
});

export default SignIn;
