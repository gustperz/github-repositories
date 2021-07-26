import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { filterFavoritesState } from '../../../state/recoil/repositories';
import { userTokenState } from '../../../state/recoil/token';

export default function useToken() {
  const [token, setToken] = useRecoilState(userTokenState);
  const setFilterFavorites = useSetRecoilState(filterFavoritesState);

  useEffect(() => {
    setFilterFavorites(false);
  }, [token, setFilterFavorites]);

  return { token, setToken };
}
