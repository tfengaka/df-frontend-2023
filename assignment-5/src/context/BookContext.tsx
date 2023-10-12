'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { FormCreateBookType, FormEditBookType } from '~/validations/schema';
import useBookContextProvider from './hooks/useBookContextProvider';

interface IBookContext {
  totalBooks: IBook[];
  totalPages: number;
  currentPage: number;
  currentBooks: IBook[];
  totalTopics: string[];
  createBook: (form: FormCreateBookType) => void;
  editBook: (id: number, form: FormEditBookType) => void;
  searchBooks: (str: string) => void;
  deleteBook: (id: number) => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
const BookContext = createContext<IBookContext | null>(null);
export const useBookContext = () => useContext(BookContext) as IBookContext;

export function BookContextProvider({ children }: { children: React.ReactNode }) {
  const value = useBookContextProvider();
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}
