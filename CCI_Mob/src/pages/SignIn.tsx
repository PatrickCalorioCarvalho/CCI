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
} from 'react-native';

function SignIn({navigation}): React.JSX.Element {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));


  useEffect(() => {
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

  const Submit = () => {
    navigation.navigate('Main')
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
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TouchableOpacity style={styles.btnSubmit} onPress={Submit}>
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
