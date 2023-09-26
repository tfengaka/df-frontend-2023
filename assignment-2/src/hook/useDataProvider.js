import { useEffect, useMemo, useState } from "react";
import { PAGE_LIMIT } from "../constant";
import staticData from "../data";

export default function useDataProvider() {
	const [totalData, setTotalData] = useState(staticData);
	const [currentPage, setCurrentPage] = useState(1);
	const [currentData, setCurrentData] = useState([]);

	useEffect(() => {
		const saveData = JSON.parse(localStorage.getItem("total-data"));
		if (saveData) {
			setTotalData(saveData);
		} else {
			setTotalData(staticData);
			localStorage.setItem("total-data", JSON.stringify(staticData));
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
		let topics = new Set();
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
		localStorage.setItem("total-data", JSON.stringify(addedItems));
	};

	const deleteItem = (id) => {
		const fillterItems = totalData.filter((item) => item.id !== id);

		setTotalData(fillterItems);
		setCurrentPage(1);
		localStorage.setItem("total-data", JSON.stringify(fillterItems));
	};

	const searchItems = (queryStr) => {
		const search_results = totalData.filter((item) =>
			item.title.toLowerCase().includes(queryStr)
		);
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
