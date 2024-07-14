import { atom } from 'recoil';

export const favoriteState = atom({
  key: 'favoriteState',
  default: [], // default to an empty array
});
