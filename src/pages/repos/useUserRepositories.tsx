import { APIError, ClientContext, useManualQuery } from 'graphql-hooks';
import { useCallback, useContext, useEffect, useState } from 'react';

import { Viewer } from './types';

const QUERY = `
query repositories($cursor: String) { 
  viewer {
    id
    login
    repositories(first: 100, after: $cursor) {
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

const parseError = (error: APIError) => {
  if (error.httpError) {
    const { body } = error.httpError;
    return JSON.parse(body).message;
  } else if (error.graphQLErrors) {
    return 'Unexpected error';
  } else if (error.fetchError) {
    return error.fetchError.message;
  }
};

const INITIAL_TOKEN = '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';

export default function useUserRepositories() {
  const [cursor, setCursor] = useState<string>();
  const [token, setToken] = useState(INITIAL_TOKEN);

  const [fetchUser, { loading, error, data }] = useManualQuery<QueryData>(QUERY, {
    variables: { cursor },
    updateData,
  });

  const client = useContext(ClientContext);

  useEffect(() => {
    client.setHeader('Authorization', `bearer ${token}`);
    fetchUser();
  }, [client, fetchUser, token]);

  const repositories = data?.viewer.repositories.nodes ?? [];
  const pageInfo = data?.viewer.repositories.pageInfo;

  const loadingMore = useCallback(() => {
    if (loading || !pageInfo?.hasNextPage) {
      return;
    }

    setCursor(pageInfo?.endCursor);
  }, [pageInfo, loading]);

  return {
    user: data?.viewer.login,
    repositories,
    hasNextPage: !!pageInfo?.hasNextPage,
    loading,
    loadingMore,
    token,
    setToken,
    error: error ? parseError(error) : undefined,
  };
}
