import React, { useEffect, useState } from "react";
import useDebounce from "../hook/useDebounce";
import { useDataContext } from "../contexts/dataContext";

function SearchItem() {
	const { searchItems } = useDataContext();
	const [searchQuery, setSearchQuery] = useState("");
	const debounceQuery = useDebounce(searchQuery, 500);

	useEffect(() => {
		searchItems(debounceQuery);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debounceQuery]);

	const handleChangeInput = (event) => {
		const searchValue = event.target.value;
		if (!searchValue.startsWith(" ")) {
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

export default SearchItem;
