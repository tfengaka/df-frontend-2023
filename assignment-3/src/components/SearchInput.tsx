import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { useBookContext } from '../context/BookContext';

function SearchInput() {
  const { searchItems } = useBookContext();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounceQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    searchItems(debounceQuery);
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
      className="search input"
      onChange={handleChangeInput}
    />
  );
}

export default SearchInput;
