export const isBrowserDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const getLocalStorageItem = <T>(name: string): null | T => {
  const item = localStorage.getItem(name);

  if (item !== null) {
    return JSON.parse(item);
  } else {
    return null;
  }
};

export const setLocalStorageItem = <T>(name: string, value: T): void => {
  localStorage.setItem(name, JSON.stringify(value));
};
