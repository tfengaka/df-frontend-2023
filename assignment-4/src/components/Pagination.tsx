'use client';

import React from 'react';
import { useBookContext } from '../context/BookContext';
import Button from './Button';

function Pagination() {
  const { totalPages, currentPage, setCurrentPage } = useBookContext();

  const handlePreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="w-full absolute -bottom-14 flex justify-end items-center gap-x-2">
      <Button
        className="px-4 py-2 bg-[#606e81] text-white hover:disabled:bg-[#606e81] disabled:opacity-30 disabled:cursor-default"
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        Prev
      </Button>
      {Array(totalPages)
        .fill(0)
        .map((_, index) => (
          <Button
            key={index}
            className={`px-4 py-2 text-white ${index + 1 === currentPage ? 'bg-primary' : 'bg-[#606e81]'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}

      <Button
        className="px-4 py-2 bg-[#606e81] text-white hover:disabled:bg-[#606e81] disabled:opacity-50 disabled:cursor-default"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
