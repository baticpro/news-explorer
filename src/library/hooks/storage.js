import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const useStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    AsyncStorage.getItem(key).then(v => {
      setValue(v);
    });
  }, []);

  return value ? value : defaultValue;
};
