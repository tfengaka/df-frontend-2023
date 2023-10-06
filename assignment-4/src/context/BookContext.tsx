'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import useBookContextProvider from './hook/useBookContextProvider';

interface IBookContext {
  totalBooks: IBook[];
  totalPages: number;
  currentPage: number;
  currentBooks: IBook[];
  totalTopics: string[];
  createBook: (form: IFormCreateBook) => void;
  searchBooks: (str: string) => void;
  deleteBook: (id: number) => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
interface IBookProviderProps {
  children: React.ReactNode;
}

const BookContext = createContext<IBookContext | null>(null);
export const useBookContext = () => useContext(BookContext) as IBookContext;

export function BookContextProvider({ children }: IBookProviderProps) {
  const value = useBookContextProvider();
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}
