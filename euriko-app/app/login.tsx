import { useState, useEffect } from 'react';
import { 
  StyleSheet, Text, TextInput, View, TouchableOpacity, 
  ImageBackground, Image, Keyboard, TouchableWithoutFeedback, 
  BackHandler 
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (email === 'admin@euriko.com' && password === '123456') {
      login();
      router.replace('/(tabs)');
    } else {
      alert('Email ou senha inválidos');
    }
  };

  // Ativar login preenchido ao clicar em "Já tenho conta"
  const handleShowLogin = () => {
    setEmail('admin@euriko.com');
    setPassword('123456');
    setShowLogin(true);
  };

  // Detecta o botão de voltar do Android ou o gesto de voltar no iOS
  useFocusEffect(() => {
    const onBackPress = () => {
      if (showLogin) {
        setShowLogin(false);
        return true; // Impede que o app feche
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground 
        source={require('../assets/images/login/login-background.jpg')} 
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Image source={require('../assets/images/logo-euriko.png')} style={styles.logo} />
          <Text style={styles.subtitle}>Um novo jeito de investir</Text>

          {!showLogin ? (
            <>
              <TouchableOpacity style={styles.buttonPrimary} onPress={() => setShowLogin(true)}>
                <Text style={styles.buttonPrimaryText}>Agendar consultoria</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonSecondary} onPress={handleShowLogin}>
                <Text style={styles.buttonSecondaryText}>Já tenho conta</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#ccc"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#ccc"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
                <Text style={styles.buttonPrimaryText}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonSecondary} onPress={() => setShowLogin(false)}>
                <Text style={styles.buttonSecondaryText}>Voltar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logo: {
    width: 180,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    marginBottom: 10,
  },
  buttonPrimary: {
    width: '100%',
    backgroundColor: '#C29F56',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonPrimaryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonSecondary: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

