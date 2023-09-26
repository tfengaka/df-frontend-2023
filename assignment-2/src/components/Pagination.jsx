import React from "react";
import { useDataContext } from "../contexts/dataContext";

function Pagination() {
	const { totalPages, currentPage, setCurrentPage } = useDataContext();

	const handlePreviousPage = () => {
		if (currentPage === 1) return;
		setCurrentPage((prev) => prev - 1);
	};

	const handleNextPage = () => {
		if (currentPage >= totalPages) return;
		setCurrentPage((prev) => prev + 1);
	};

	return (
		<div className="table_pagination">
			<button
				className={`btn pagination ${currentPage === 1 && "disable"}`}
				onClick={handlePreviousPage}
			>
				Prev
			</button>
			{Array(totalPages)
				.fill(0)
				.map((_, index) => (
					<button
						key={index}
						className={`btn pagination ${
							index + 1 === currentPage && "active"
						}`}
						onClick={() => setCurrentPage(index + 1)}
					>
						{index + 1}
					</button>
				))}

			<button
				className={`btn pagination ${currentPage === totalPages && "disable"}`}
				onClick={handleNextPage}
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;
