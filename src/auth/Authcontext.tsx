import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthContext {
  user?: User;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
}

export const authContext = createContext<AuthContext>({
  isAuthenticated: true,
  setUser: (user: User) => {},
  logout: () => {},
});

export const useAuth = () => useContext(authContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, _setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const sessionUser = sessionStorage.getItem('user');

    console.log({ sessionUser: !!sessionUser });

    if (sessionUser) {
      _setUser(JSON.parse(sessionUser));
    }

    setLoading(false);
  }, []);

  const setUser = useCallback((user: User) => {
    _setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  }, []);

  const logout = useCallback(() => {
    sessionStorage.clear();
    _setUser(undefined);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <authContext.Provider value={{ user, setUser, logout, isAuthenticated }}>
      {children}
    </authContext.Provider>
  );
}
