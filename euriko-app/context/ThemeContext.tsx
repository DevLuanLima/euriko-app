import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { Themes } from '@/constants/Themes';

const ThemeContext = createContext(Themes.light);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme();
  const theme = systemTheme === 'dark' ? Themes.dark : Themes.light;

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
