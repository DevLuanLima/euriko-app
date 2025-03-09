import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones

export default function SettingsScreen() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace('/login'); // Redireciona para a tela de login
  };

  return (
    <ThemedView style={styles.container}>
      {/* Botão de Logout no Canto Superior Direito */}
      <TouchableOpacity style={styles.logoutIconButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Settings</Text>

      {/* Botões em Matriz */}
      <View style={styles.grid}>
        {/* Botão 1 */}
        <TouchableOpacity
          style={[styles.gridButton, styles.buttonProfile]}
          onPress={() => alert('Perfil do Utilizador')}
        >
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={styles.gridButtonText}>Perfil</Text>
        </TouchableOpacity>

        {/* Botão 2 */}
        <TouchableOpacity
          style={[styles.gridButton, styles.buttonDashboard]}
          onPress={() => alert('Configurar Meu Dashboard')}
        >
          <Ionicons name="grid-outline" size={24} color="#fff" />
          <Text style={styles.gridButtonText}>Dashboard</Text>
        </TouchableOpacity>

        {/* Botão 3 */}
        <TouchableOpacity
          style={[styles.gridButton, styles.buttonIRS]}
          onPress={() => alert('Declaração IRS')}
        >
          <Ionicons name="document-text-outline" size={24} color="#fff" />
          <Text style={styles.gridButtonText}>Declaração</Text>
        </TouchableOpacity>

        {/* Botão 4 */}
        <TouchableOpacity
          style={[styles.gridButton, styles.buttonSupport]}
          onPress={() => alert('Suporte')}
        >
          <Ionicons name="help-circle-outline" size={24} color="#fff" />
          <Text style={styles.gridButtonText}>Suporte</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingHorizontal: 20,
  },
  logoutIconButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    right: 20,
    backgroundColor: '#ff4d4d',
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridButton: {
    width: '30%', // Três botões por linha
    aspectRatio: 1,
    backgroundColor: '#6A706E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  gridButtonText: {
    fontSize: 12, // Tamanho reduzido para evitar quebras
    fontWeight: '600',
    color: '#fff',
    marginTop: 5, // Espaçamento entre o ícone e o texto
    textAlign: 'center',
  },
  buttonProfile: {
    backgroundColor: '#6A706E',
  },
  buttonDashboard: {
    backgroundColor: '#C59D91',
  },
  buttonIRS: {
    backgroundColor: '#333',
  },
  buttonSupport: {
    backgroundColor: '#777',
  },
});
