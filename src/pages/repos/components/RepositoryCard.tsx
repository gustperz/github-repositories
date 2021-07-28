import React from 'react';

import styles from './RepositoryCard.module.scss';
import { Repository } from '../../../state/types';
import { ReactComponent as FavoriteBorder } from './favorite_border.svg';
import { ReactComponent as Favorite } from './favorite.svg';
import { ReactComponent as Star } from './star.svg';

export interface RepositoryCardProps {
  data: Repository;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

export default function RepositoryCard({ data, isFavorite, onFavoriteClick }: RepositoryCardProps) {
  const { name, created_at, description, language, stargazer_count, url } = data;

  return (
    <div className={styles.card}>
      <div>
        <a className={styles.link} href={url}>
          {name}
        </a>
        <button className={styles.favoriteButton} onClick={onFavoriteClick}>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
          Favorite
        </button>

        <p className={styles.description}>
          {description ?? (
            <i>
              <small>no description</small>
            </i>
          )}
        </p>

        <p className={styles.details}>
          <span className="ml-0">
            <span className={styles.languaje}>{language}</span>
          </span>

          <a className={styles.stars} href={`${url}/stargazers`}>
            <Star />
            {stargazer_count}
          </a>

          <span className={styles.date}>{created_at}</span>
        </p>
      </div>
    </div>
  );
}
