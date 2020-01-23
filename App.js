import React, {useEffect} from 'react';
import {NavigatorContainer} from './src/features/navigator';
import {THEME_LIGHT, ThemeContext} from './src/library/context/theme-context';
import {useStorage} from './src/library/hooks/storage';
import {STORAGE_THEME} from './src/config/storage-keys';
import codePush from 'react-native-code-push';

const codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

const updateBundle = async () => {
  const available = await codePush.checkForUpdate();

  if (available && available.isMandatory) {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }
};

const App = () => {
  const theme = useStorage(STORAGE_THEME, THEME_LIGHT);

  useEffect(updateBundle, []);

  return (
    <ThemeContext.Provider value={theme}>
      <NavigatorContainer />
    </ThemeContext.Provider>
  );
};

export default codePush(codePushOptions)(App);
