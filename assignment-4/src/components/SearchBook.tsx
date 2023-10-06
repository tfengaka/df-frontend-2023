'use client';

import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { useBookContext } from '../context/BookContext';

function SearchBook() {
  const { searchBooks } = useBookContext();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounceQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    searchBooks(debounceQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceQuery]);

  const handleChangeInput = (event) => {
    const searchValue = event.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchQuery(searchValue);
    }
  };

  return (
    <input
      value={searchQuery}
      type="text"
      placeholder="Search items..."
      className="text-sm font-semibold p-2 rounded-md outline-none border-2 border-[#acbbcf] transition-colors hover:border-primary focus:border-primary placeholder:text-[#606e81] placeholder:opacity-70"
      onChange={handleChangeInput}
    />
  );
}

export default SearchBook;
