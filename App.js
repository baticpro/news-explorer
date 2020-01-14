import React from 'react';
import {NavigatorContainer} from './src/features/navigator';
import {THEME_LIGHT, ThemeContext} from './src/library/context/theme-context';

const App = () => {
  return (
    <ThemeContext.Provider value={THEME_LIGHT}>
      <NavigatorContainer />
    </ThemeContext.Provider>
  );
};

export default App;
