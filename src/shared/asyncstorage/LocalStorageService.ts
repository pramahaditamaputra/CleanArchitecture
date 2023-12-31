import AsyncStorage from '@react-native-async-storage/async-storage';

interface ILocalStorageService {
  save: <T = any>(key: string, value: T) => Promise<T>;
  saveString: (key: string, value: string) => Promise<string>;
  get: <T = any>(key: string) => Promise<T | null>;
  getString: (key: string) => Promise<string | null>;
  remove: (key: string) => Promise<boolean>;
  clear: () => Promise<void>;
}

const LocalStorageService = (): ILocalStorageService => {
  return {
    save: async (key: string, value: any) =>
      AsyncStorage.setItem(key, JSON.stringify(value)).then(() => value),
    saveString: async (key: string, value: any) =>
      AsyncStorage.setItem(key, value).then(() => value),
    get: async <T = any>(key: string): Promise<T | null> => {
      const value = await AsyncStorage.getItem(key);
      if (!value) {
        return Promise.resolve(null);
      }

      return Promise.resolve(JSON.parse(value));
    },
    getString: async (key: string): Promise<string | null> =>
      AsyncStorage.getItem(key),
    remove: async (key: string) =>
      AsyncStorage.removeItem(key).then(() => true),
    clear: async () => AsyncStorage.clear(),
  };
};

export default LocalStorageService();
