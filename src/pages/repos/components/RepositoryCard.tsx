import React from 'react';

import styles from './RepositoryCard.module.scss';
import { Repository } from '../types';
import { ReactComponent as FavoriteBorder } from './favorite_border.svg';
import { ReactComponent as Favrite } from './favorite.svg';
import { ReactComponent as Star } from './star.svg';

export interface RepositoryCardProps {
  data: Repository;
}

export default function RepositoryCard({ data }: RepositoryCardProps) {
  const { name, createdAt, description, id, primaryLanguage, stargazerCount, url } = data;

  return (
    <div className={styles.card}>
      <div>
        <a className={styles.link} href={url}>
          {name}
        </a>
        <button className={styles.favoriteButton}>
          <FavoriteBorder />
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
            <span
              className={styles.languajeColor}
              style={{ backgroundColor: primaryLanguage.color }}
            ></span>
            <span className={styles.languaje}>{primaryLanguage.name}</span>
          </span>

          <a className={styles.stars} href={`${url}/stargazers`}>
            <Star />
            {stargazerCount}
          </a>

          <span className={styles.date}>{createdAt}</span>
        </p>
      </div>
    </div>
  );
}
