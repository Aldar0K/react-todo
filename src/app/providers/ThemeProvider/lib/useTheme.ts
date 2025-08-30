import { useContext } from 'react';

import {
  AppThemes,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from './ThemeContext';

type UseThemeResult = {
  theme: AppThemes;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === AppThemes.LIGHT ? AppThemes.DARK : AppThemes.LIGHT;

    setTheme?.(newTheme);

    theme && document.body.classList.remove(theme);
    document.body.classList.add(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || AppThemes.LIGHT,
    toggleTheme,
  };
};
