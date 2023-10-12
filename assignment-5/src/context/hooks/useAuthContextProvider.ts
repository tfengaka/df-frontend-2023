'use client';

import { useEffect, useState } from 'react';
import { users } from '~/data';
import { FormSignInType } from '~/validations/schema';

export default function useAuthContextProvider() {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user: IUser | null = JSON.parse(localStorage.getItem('user') || 'null');
    if (user !== null) {
      setUser(user);
    }
  }, []);

  const signIn = (form: FormSignInType): Promise<IUser> => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      const userData = users.find((user) => user.email === form.email && user.password === form.password);
      if (userData) {
        setUser(userData);
        setLoading(false);
        resolve(userData);
      } else {
        setLoading(false);
        reject(new Error('Invalid credentials'));
      }
    });
  };

  const signOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return {
    user,
    loading,
    signIn,
    signOut,
  };
}
