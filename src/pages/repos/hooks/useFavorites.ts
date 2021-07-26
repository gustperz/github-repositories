import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import {
  filterFavoritesState,
  favoritesRepositoriesState,
} from '../../../state/recoil/repositories';
import useFavoritesStorage from './useFavoritesStorage';

export default function useFavorites() {
  useFavoritesStorage();

  const [filterFavorites, setFilterFavorites] = useRecoilState(filterFavoritesState);
  const [favorites, setFavorites] = useRecoilState(favoritesRepositoriesState);

  const toggleFilterFavorites = useCallback(() => {
    setFilterFavorites(current => !current);
  }, [setFilterFavorites]);

  const toggleFavoriteRepository = useCallback(
    (repositoryId: string) => {
      if (favorites.includes(repositoryId)) {
        setFavorites(items => items.filter(item => item !== repositoryId));
      } else {
        setFavorites(items => [...items, repositoryId]);
      }
    },
    [favorites, setFavorites]
  );

  const isFavorite = useCallback(
    (repositoryId: string) => favorites.includes(repositoryId),
    [favorites]
  );

  return {
    filterFavorites,
    toggleFilterFavorites,
    isFavorite,
    toggleFavoriteRepository,
    hasFavorites: !!favorites.length,
  };
}
