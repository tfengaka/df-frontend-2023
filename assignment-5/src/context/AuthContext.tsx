'use client';

import { createContext, useContext } from 'react';
import { FormSignInType } from '~/validations/schema';
import useAuthContextProvider from './hooks/useAuthContextProvider';

interface IAuthContext {
  user: IUser | null;
  loading: boolean;
  signIn: (form: FormSignInType) => Promise<IUser>;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContext | null>(null);
export const useAuthContext = () => useContext(AuthContext) as IAuthContext;

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const value = useAuthContextProvider();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
