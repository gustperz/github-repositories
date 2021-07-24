import { useCallback } from 'react';

import { useAuth } from './../../auth/Authcontext';

export interface Credentials {
  email: string;
  password: string;
}

export default function useLogin() {
  const { setUser } = useAuth();

  const login = useCallback(
    ({ email, password }: Credentials) => {
      const storeUser = localStorage.getItem(`user:${email}`);
      if (!storeUser) {
        throw new Error('Wrong username or password');
      }

      const user = JSON.parse(storeUser);

      if (user.password !== password) {
        throw new Error('Wrong username or password');
      }

      setUser(user);
    },
    [setUser]
  );

  return { login };
}
