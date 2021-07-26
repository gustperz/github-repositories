import { ClientContext, useManualQuery, APIError } from 'graphql-hooks';
import { useContext, useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { repositoriesListState, userRepositoriesState } from '../../../state/recoil/repositories';
import { Viewer } from '../../../state/types';
import useToken from './useToken';

const QUERY = `
query repositories { 
  viewer {
    id
    login
    repositories(first: 100) {
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

export default function useRepositories() {
  const { token } = useToken();
  const setUserRepositories = useSetRecoilState(userRepositoriesState);
  const repositories = useRecoilValue(repositoriesListState);

  const [fetchQuery, { loading, error, data }] = useManualQuery<QueryData>(QUERY);

  const client = useContext(ClientContext);

  useEffect(() => {
    const getRepositories = async () => {
      const { data } = await fetchQuery();

      setUserRepositories(data?.viewer.repositories.nodes ?? []);
    };

    client.setHeader('Authorization', `bearer ${token}`);
    getRepositories();
  }, [client, fetchQuery, setUserRepositories, token]);

  return {
    user: data?.viewer.login,
    repositories,
    error: error ? parseError(error) : undefined,
    loading,
  };
}
