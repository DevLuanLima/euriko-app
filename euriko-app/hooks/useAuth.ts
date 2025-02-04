import { useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  error: string | null;
};

const DEFAULT_EMAIL = "admin@euriko.com";
const DEFAULT_PASSWORD = "123456";

export function useAuth(): AuthContextType {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = (email: string, password: string): boolean => {
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
      setError(null);
      return true;
    } else {
      setError("Email ou senha inválidos.");
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout, error };
}
