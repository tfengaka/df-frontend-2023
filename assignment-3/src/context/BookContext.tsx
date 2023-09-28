import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PAGE_LIMIT } from '../constant';
import staticData from '../data';

interface IBookContextType {
  totalData: IBook[];
  totalPages: number;
  currentPage: number;
  currentData: IBook[];
  totalTopics: string[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  createItem: (form: IFormCreateBook) => void;
  searchItems: (str: string) => void;
  deleteItem: (id: number) => void;
}

interface IBookProviderProps {
  children: React.ReactNode;
}

const BookContext = createContext<IBookContextType | null>(null);
export const useBookContext = () => useContext(BookContext) as IBookContextType;

export function BookProvider({ children }: IBookProviderProps) {
  const value = useBookContextProvider() as IBookContextType;
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export function useBookContextProvider() {
  const [totalData, setTotalData] = useState<IBook[]>(staticData);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<IBook[]>([]);

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem('total-data') || 'null');
    if (saveData) {
      setTotalData(saveData);
    } else {
      setTotalData(staticData);
      localStorage.setItem('total-data', JSON.stringify(staticData));
    }
  }, []);

  useEffect(() => {
    const headIndex = (currentPage - 1) * PAGE_LIMIT;
    const tailIndex = Math.min(currentPage * PAGE_LIMIT, totalData.length);
    setCurrentData(totalData.slice(headIndex, tailIndex));
  }, [totalData, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(totalData.length / PAGE_LIMIT);
  }, [totalData]);

  const totalTopics = useMemo(() => {
    const topics = new Set();
    totalData.forEach((item) => topics.add(item.topic));
    return [...topics];
  }, [totalData]);

  const createItem = ({ title, author, topic }) => {
    const addedItems = [
      ...totalData,
      {
        id: totalData.length + 1,
        title,
        author,
        topic,
      },
    ];
    setTotalData(addedItems);
    localStorage.setItem('total-data', JSON.stringify(addedItems));
  };

  const deleteItem = (id) => {
    const fillterItems = totalData.filter((item) => item.id !== id);

    setTotalData(fillterItems);
    setCurrentPage(1);
    localStorage.setItem('total-data', JSON.stringify(fillterItems));
  };

  const searchItems = (str: string) => {
    const search_results = totalData.filter((item) => item.title.toLowerCase().includes(str));
    setCurrentData(search_results);
    setCurrentPage(1);
  };

  return {
    totalData,
    totalPages,
    totalTopics,
    currentPage,
    currentData,
    setCurrentPage,
    createItem,
    deleteItem,
    searchItems,
  };
}
