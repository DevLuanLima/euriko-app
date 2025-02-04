import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleReset = () => {
    // Simulação de recuperação de senha
    alert(`Instruções enviadas para o email ${email}`);
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Enviar" onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});
