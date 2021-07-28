import { atom, selector } from 'recoil';

import { Repository } from '../types';
import { userTokenState } from './token';

export const userRepositoriesState = selector<Repository[]>({
  key: 'userRepositoriesState',
  get: async ({ get }) => {
    const user = get(userTokenState);

    if (!user) {
      throw 'Empty user name';
    }

    const response = await fetch(
      `https://api.github.com/users/${user}/repos?sort=created&direction=desc&per_page=100`
    );
    const result = await response.json();

    if (response.status !== 200) {
      throw result.message ?? 'Unexpected Error';
    }

    return result;
  },
});

export const favoritesRepositoriesState = atom<string[]>({
  key: 'userFavoriteRepositoriesState',
  default: [],
});

export const filterFavoritesState = atom<boolean>({
  key: 'filterFavoritesState',
  default: false,
});

export const repositoriesListState = selector({
  key: 'repositoriesListState',
  get: ({ get }) => {
    const filter = get(filterFavoritesState);
    const list = get(userRepositoriesState);
    const favorites = get(favoritesRepositoriesState);

    if (filter) {
      return list.filter(repository => favorites.includes(repository.id));
    }

    return list;
  },
});
