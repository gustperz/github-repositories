import { useQuery } from 'graphql-hooks';
import { useCallback, useState } from 'react';

const QUERY = `
query repositories($cursor: String) { 
  viewer {
    id
    repositories(first: 10, after: $cursor) {
  		nodes {
        createdAt
        description
        id
        name
        primaryLanguage {
          name
          color
        }
        stargazerCount
        url
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`;

export interface Repository {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
  stargazerCount: number;
  url: string;
}

export interface Repositories {
  nodes: Repository[];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
}

export interface Viewer {
  id: string;
  repositories: Repositories;
}

interface QueryData {
  viewer: Viewer;
}

const updateData = (prevData: QueryData, data: QueryData): QueryData => {
  return {
    ...data,
    viewer: {
      ...data.viewer,
      repositories: {
        ...data.viewer.repositories,
        nodes: [...prevData.viewer.repositories.nodes, ...data.viewer.repositories.nodes],
      },
    },
  };
};

export default function useUserRepositories() {
  const [cursor, setCursor] = useState<string>();

  const { loading, error, data } = useQuery<QueryData>(QUERY, {
    variables: { cursor },
    updateData,
  });

  const repositories = data?.viewer.repositories.nodes ?? [];
  const pageInfo = data?.viewer.repositories.pageInfo;

  const loadingMore = useCallback(() => {
    if (loading || !pageInfo?.hasNextPage) {
      return;
    }

    setCursor(pageInfo?.endCursor);
  }, [pageInfo, loading]);

  return {
    repositories,
    hasNextPage: !!pageInfo?.hasNextPage,
    loadingMore,
  };
}
