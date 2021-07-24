import React, { createContext, useContext, useState } from 'react';

export interface User {
  firtsName: string;
  lastsName: string;
  email: string;
}

export interface AuthContext {
  user?: User;
  isAuthenticated: boolean;
}

export const authContext = createContext<AuthContext>({ isAuthenticated: true });

export const useAuth = () => useContext(authContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();

  return (
    <authContext.Provider value={{ user, isAuthenticated: !!user }}>
      {children}
    </authContext.Provider>
  );
}
