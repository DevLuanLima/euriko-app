import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function SettingsScreen() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace('/login'); // Redireciona para a tela de login
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Perfil do Utilizador')}
      >
        <Text style={styles.buttonText}>Perfil do Utilizador</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Configurar Meu Dashboard')}
      >
        <Text style={styles.buttonText}>Configurar Meu Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Declaração IRS')}
      >
        <Text style={styles.buttonText}>Declaração IRS</Text>
      </TouchableOpacity>

      {/* Botão de Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 20, // Respeita a Ilha Dinâmica no iOS
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Para Android
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  logoutButton: {
    marginBottom: 100, // Espaço entre os botões e o logout
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Para Android
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 10, // Acima das abas
    left: 20,
    right: 20,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
