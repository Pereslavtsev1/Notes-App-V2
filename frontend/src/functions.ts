export const helper = (str: string) => {
  return str.length <= 20 ? str : str.substring(0, 20) + "...";
};
