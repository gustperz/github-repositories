import { atom } from 'recoil';

const INITIAL_TOKEN = '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';

export const userTokenState = atom({
  key: 'userTokenState',
  default: INITIAL_TOKEN,
});
