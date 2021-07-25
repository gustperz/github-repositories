import React from 'react';

import styles from './Repos.module.scss';
import useUserRepositories from './useUserRepositories';
import RepositoriesList from './components/RepositoriesList';

export default function Repos() {
  const { repositories, hasNextPage, loadingMore } = useUserRepositories();

  return (
    <div className={styles.pageContainer}>
      <RepositoriesList data={repositories} endReached={loadingMore} hasNextPage={hasNextPage} />
    </div>
  );
}
