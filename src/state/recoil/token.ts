import { atom } from 'recoil';

const INITIAL_TOKEN = 'gustperz';

export const userTokenState = atom({
  key: 'userTokenState',
  default: INITIAL_TOKEN,
});
