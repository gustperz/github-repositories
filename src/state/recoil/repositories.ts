import { atom, selector } from 'recoil';

import { Repository } from '../types';

export const userRepositoriesState = atom<Repository[]>({
  key: 'userRepositoriesState',
  default: [],
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
