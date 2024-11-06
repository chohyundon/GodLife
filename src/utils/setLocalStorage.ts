export const setLocalStorageData = (
  storageDataKey: string,
  storageValue: string
) => {
  return localStorage.setItem(storageDataKey, storageValue);
};
