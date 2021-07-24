import { useCallback } from 'react';

import { useAuth } from './../../auth/Authcontext';

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function useSignUp() {
  const { setUser } = useAuth();

  const signUp = useCallback(
    (data: SignUpData) => {
      if (localStorage.getItem(`user:${data.email}`)) {
        throw new Error('The email is already registered');
      }

      localStorage.setItem(`user:${data.email}`, JSON.stringify(data));

      const { email, firstName, lastName } = data;
      setUser({ email, firstName, lastName });
    },
    [setUser]
  );

  return { signUp };
}
