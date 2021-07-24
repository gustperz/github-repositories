import React, { createContext, useContext, useState } from 'react';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthContext {
  user?: User;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
}

export const authContext = createContext<AuthContext>({
  isAuthenticated: true,
  setUser: (user: User) => {},
});

export const useAuth = () => useContext(authContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  return (
    <authContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </authContext.Provider>
  );
}
