import React from 'react';
import {NavigatorContainer} from './src/features/navigator';
import {THEME_LIGHT, ThemeContext} from './src/library/context/theme-context';
import {useStorage} from './src/library/hooks/storage';
import {STORAGE_THEME} from './src/config/storage-keys';

const App = () => {
  const theme = useStorage(STORAGE_THEME, THEME_LIGHT);

  return (
    <ThemeContext.Provider value={theme}>
      <NavigatorContainer />
    </ThemeContext.Provider>
  );
};

export default App;
