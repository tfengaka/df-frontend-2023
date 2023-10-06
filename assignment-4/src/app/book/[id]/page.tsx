'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import DeleteBookModal from '../../../components/DeleteBookModal';

interface IBookDetailProps {
  params: { id: string };
}

function BookDetail({ params: { id } }: IBookDetailProps) {
  const [bookData, setBookData] = useState<IBook>();

  useEffect(() => {
    const allBooks = JSON.parse(localStorage.getItem('total-data') || '[]') as IBook[];
    const book = allBooks.find((item) => item.id === Number(id));
    setBookData(book);
  }, [id]);

  return (
    <main className="flex flex-col items-center justify-between p-24 relative">
      <Link href="/" className="text-primary hover:underline absolute top-5 left-8 font-bold">
        {'< Back'}
      </Link>
      <section className="w-full h-full font-semibold">
        <h3 className="font-bold text-2xl text-secondary">{bookData?.title}</h3>
        <div className="text-lg">
          <span className="font-semibold">Author: </span>
          <span>{bookData?.author}</span>
        </div>
        <div className="text-lg mb-3">
          <span className="font-semibold">Topic: </span>
          <span>{bookData?.topic}</span>
        </div>
        {bookData && <DeleteBookModal item={bookData} />}
      </section>
    </main>
  );
}

export default BookDetail;
