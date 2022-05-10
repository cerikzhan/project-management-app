export interface StorageService {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

export default class Storage implements StorageService {
  constructor(private $storage: WindowLocalStorage['localStorage']) {}

  getItem(key: string) {
    return this.$storage.getItem(key);
  }

  setItem(key: string, value: string) {
    this.$storage.setItem(key, value);
  }

  removeItem(key: string) {
    this.$storage.removeItem(key);
  }

  clear() {
    this.$storage.clear();
  }
}
