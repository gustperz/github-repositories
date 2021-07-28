import React from 'react';

import styles from './Repos.module.scss';
import LoadingFrame from './components/LoadingFrame';
import TokenForm from './components/TokenForm';
import Button from '../../components/Button';
import useToken from './hooks/useToken';
import useRepositories from './hooks/useRepositories';
import useFavorites from './hooks/useFavorites';
import RepositoryCard from './components/RepositoryCard';

export default function Repos() {
  const { token, setToken } = useToken();
  const { repositories, user, error, loading } = useRepositories();
  const {
    filterFavorites,
    toggleFilterFavorites,
    isFavorite,
    toggleFavoriteRepository,
    hasFavorites,
  } = useFavorites();

  return (
    <div className={styles.pageContainer}>
      <TokenForm {...{ token, setToken, loading }} />

      {loading ? (
        <LoadingFrame />
      ) : error ? (
        <h2 className={styles.error}>{error}</h2>
      ) : (
        <>
          <div className={styles.listTop}>
            <h2 className={styles.userLabel}>{user}'s public repositories</h2>

            {hasFavorites && (
              <Button onClick={toggleFilterFavorites} className={styles.filterFavorites} raised>
                {filterFavorites ? 'Show all' : 'Filter favorites'}
              </Button>
            )}
          </div>

          <div className={styles.repositoriesList}>
            {repositories.map(repo => (
              <RepositoryCard
                key={repo.id}
                data={repo}
                isFavorite={isFavorite(repo.id)}
                onFavoriteClick={() => toggleFavoriteRepository(repo.id)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
