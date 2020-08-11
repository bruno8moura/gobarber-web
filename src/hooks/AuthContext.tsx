import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: User;
}

interface SigningCredentials {
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SigningCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const storageTokenKey = '@GoBarber:token';
  const storageUserKey = '@GoBarber:user';

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(storageTokenKey);
    const user = localStorage.getItem(storageUserKey);

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem(storageTokenKey, token);
    localStorage.setItem(storageUserKey, JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(storageTokenKey);
    localStorage.removeItem(storageUserKey);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
