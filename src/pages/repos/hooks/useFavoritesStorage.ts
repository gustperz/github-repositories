import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { useAuth } from '../../../auth/Authcontext';
import {
  favoritesRepositoriesState,
  filterFavoritesState,
} from '../../../state/recoil/repositories';

export default function useFavoritesStorage() {
  const { user } = useAuth();
  const storageKey = `favoritres:${user?.email}`;

  const [favorites, setFavorites] = useRecoilState(favoritesRepositoriesState);
  const setFilterFavorites = useSetRecoilState(filterFavoritesState);

  useEffect(() => {
    const savedFavorites = localStorage.getItem(storageKey);

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, [setFavorites, storageKey]);

  useEffect(() => {
    if (favorites.length) {
      localStorage.setItem(storageKey, JSON.stringify(favorites));
    } else {
      localStorage.removeItem(storageKey);
      setFilterFavorites(false);
    }
  }, [favorites, setFilterFavorites, storageKey]);
}
