import { useRecoilValueLoadable } from 'recoil';

import { repositoriesListState } from '../../../state/recoil/repositories';
import useToken from './useToken';

export default function useRepositories() {
  const { token } = useToken();
  const repositories = useRecoilValueLoadable(repositoriesListState);

  if (repositories.state === 'loading') {
    return {
      user: token,
      loading: true,
      repositories: [],
    };
  }

  return {
    user: token,
    loading: false,
    error: repositories.state === 'hasError' ? repositories.contents : undefined,
    repositories: repositories.state === 'hasValue' ? repositories.contents : [],
  };
}
