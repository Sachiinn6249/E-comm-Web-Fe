import { atom } from 'recoil';

export const searchState = atom({
  key: 'searchState',
  default: [], // default to an empty array
});
