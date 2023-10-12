import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { books } from '~/data';
import { FormCreateBookType, FormEditBookType } from '~/validations/schema';

const PAGE_LIMIT = 5;

function useBookContextProvider() {
  const [totalBooks, setTotalBooks] = useState<IBook[]>(books);
  const [currentBooks, setCurrentBooks] = useState<IBook[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem('total-data') || 'null');
    if (saveData) {
      setTotalBooks(saveData);
    } else {
      setTotalBooks(books);
      localStorage.setItem('total-data', JSON.stringify(books));
    }
  }, []);

  useEffect(() => {
    const headIndex = (currentPage - 1) * PAGE_LIMIT;
    const tailIndex = Math.min(currentPage * PAGE_LIMIT, totalBooks.length);
    setCurrentBooks(totalBooks.slice(headIndex, tailIndex));
  }, [totalBooks, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(totalBooks.length / PAGE_LIMIT);
  }, [totalBooks]);

  const totalTopics = useMemo(() => {
    const topics = new Set<string>();
    totalBooks.forEach((item) => topics.add(item.topic));
    return Array.from(topics);
  }, [totalBooks]);

  const createBook = ({ title, author, topic }: FormCreateBookType) => {
    const addedItems = [
      ...totalBooks,
      {
        id: totalBooks.length + 1,
        title,
        author,
        topic,
      },
    ];
    setTotalBooks(addedItems);
    localStorage.setItem('total-data', JSON.stringify(addedItems));
  };

  const deleteBook = (id: number) => {
    const fillterItems = totalBooks.filter((item) => item.id !== id);

    setTotalBooks(fillterItems);
    setCurrentPage(1);
    localStorage.setItem('total-data', JSON.stringify(fillterItems));
  };

  const editBook = (id: number, { title, author, topic }: FormEditBookType) => {
    const bookIndex = totalBooks.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      toast.error('Error: Book not found');
      return;
    }
    const cloneBooks = [...totalBooks];
    cloneBooks[bookIndex].title = title;
    cloneBooks[bookIndex].author = author;
    cloneBooks[bookIndex].topic = topic;
    setTotalBooks(cloneBooks);
    localStorage.setItem('total-data', JSON.stringify(cloneBooks));
  };

  const searchBooks = (str: string) => {
    const search_results = totalBooks.filter((item) => item.title.toLowerCase().includes(str));
    setCurrentBooks(search_results);
    setCurrentPage(1);
  };

  return {
    totalBooks,
    totalPages,
    totalTopics,
    currentPage,
    currentBooks,
    createBook,
    editBook,
    deleteBook,
    searchBooks,
    setCurrentPage,
  };
}

export default useBookContextProvider;
