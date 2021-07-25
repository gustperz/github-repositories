import React, { useEffect, useRef, useState } from 'react';

import styles from './RepositoriesList.module.scss';
import { Repository } from '../types';
import RepositoryCard from './RepositoryCard';

export interface RepositoriesListProps {
  data: Repository[];
  hasNextPage: boolean;
  endReached: () => void;
}

const LOADING_AREA_HEIGHT = 40;

export default function RepositoriesList({ data, endReached, hasNextPage }: RepositoriesListProps) {
  const loadingReff = useRef<HTMLDivElement>(null);
  const hadlerTimeoutRef = useRef<any>();

  const [prevPosition, setPrevPosition] = useState(0);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const newposition = entries[0].boundingClientRect.y;

      if (newposition < prevPosition) {
        clearTimeout(hadlerTimeoutRef.current);
        hadlerTimeoutRef.current = setTimeout(() => endReached(), 300);
      }

      setPrevPosition(newposition);
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    loadingReff.current && observer.observe(loadingReff.current);

    return () => {
      observer.disconnect();
    };
  }, [endReached, prevPosition]);

  return (
    <div className={styles.repositoriesList}>
      {data.map(repo => (
        <RepositoryCard key={repo.id} data={repo} />
      ))}
      {hasNextPage && (
        <div
          ref={loadingReff}
          className={styles.loadingMore}
          style={{ height: LOADING_AREA_HEIGHT }}
        >
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}
