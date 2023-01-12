import dayjs from './dayjs';

export const isCFPOpen = () => {
  return dayjs().isBefore('2023-01-16 23:59:59');
};
