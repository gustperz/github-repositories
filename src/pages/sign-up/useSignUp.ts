import { useCallback } from 'react';

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function useSignUp() {
  const signUp = useCallback((data: SignUpData) => {
    if (localStorage.getItem(`user:${data.email}`)) {
      throw new Error('The email is already registered');
    }

    localStorage.setItem(`user:${data.email}`, JSON.stringify(data));
  }, []);

  return { signUp };
}
