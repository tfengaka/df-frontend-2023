'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import DeleteBook from '~/components/DeleteBook';
import EditBook from '~/components/EditBook';
import { useBookContext } from '~/context/BookContext';

interface IBookDetailProps {
  params: { id: string };
}

function BookDetail({ params: { id } }: IBookDetailProps) {
  const router = useRouter();
  const { totalBooks } = useBookContext();

  const bookData = useMemo(() => {
    return totalBooks.find((book) => book.id === Number(id));
  }, [id, totalBooks]);

  return (
    <main className="flex flex-col items-center justify-between p-24 relative">
      <Link
        href="/book"
        className="text-primary hover:underline absolute top-5 left-8 font-bold flex  items-center gap-x-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        <span>Back</span>
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
        {bookData && (
          <div className="flex items-center gap-x-2">
            <DeleteBook item={bookData} onFinished={() => router.replace('/book')} />
            <EditBook data={bookData} />
          </div>
        )}
      </section>
    </main>
  );
}

export default BookDetail;
