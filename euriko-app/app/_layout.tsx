import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthStack />
    </AuthProvider>
  );
}

function AuthStack() {
  const { isAuthenticated } = useAuth();

  return (
    
    <Stack screenOptions={{ headerShown: false }}>
      {/* Renderiza a tela de login se não estiver autenticado */}
      {!isAuthenticated ? (
        <Stack.Screen name="login" options={{ headerShown: false }} />
      ) : (
        // Renderiza as abas se estiver autenticado
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
