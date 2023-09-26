import React from "react";
import { useDataContext } from "../contexts/dataContext";
import DeleteItemModal from "./DeleteItemModal";

function TableData() {
	const { currentData } = useDataContext();

	return (
		<table id="table-data">
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Topic</th>
					<th>Action</th>
				</tr>
			</thead>

			<tbody>
				{currentData &&
					currentData.length > 0 &&
					currentData.map((item, index) => (
						<TableItem key={index} item={item} />
					))}
			</tbody>
		</table>
	);
}

const TableItem = ({ item }) => (
	<tr>
		<td>{item.title}</td>
		<td>{item.author}</td>
		<td>{item.topic}</td>
		<td>
			<DeleteItemModal item={item} />
		</td>
	</tr>
);

export default TableData;
