import {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import {
  AppThemes,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppThemes)
  || AppThemes.LIGHT;

type ThemeProviderProps = {
  children: ReactNode;
  initialTheme?: AppThemes;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme = defaultTheme }) => {
  const [theme, setTheme] = useState<AppThemes>(initialTheme);

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
