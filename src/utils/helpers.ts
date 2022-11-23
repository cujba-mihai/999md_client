export const getKeyValue = <T extends object, U extends keyof T>(
  key: U,
) => {
  return (obj: T) => obj[key];
};