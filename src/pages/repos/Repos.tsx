import React from 'react';

import styles from './Repos.module.scss';
import useUserRepositories from './useUserRepositories';
import RepositoriesList from './components/RepositoriesList';
import LoadingFrame from './components/LoadingFrame';
import TokenForm from './components/TokenForm';

export default function Repos() {
  const { repositories, hasNextPage, loading, loadingMore, token, setToken, user, error } =
    useUserRepositories();

  console.log(error);

  return (
    <div className={styles.pageContainer}>
      <TokenForm {...{ token, setToken, loading }} />

      {loading ? (
        <LoadingFrame />
      ) : error ? (
        <h2 className={styles.error}>{error}</h2>
      ) : (
        <>
          <h2 className={styles.userLabel}>{user}'s repositories</h2>

          <RepositoriesList
            data={repositories}
            endReached={loadingMore}
            hasNextPage={hasNextPage}
          />
        </>
      )}
    </div>
  );
}
