'use client';

import Link from 'next/link';
import { useBookContext } from '../context/BookContext';
import DeleteBookModal from './DeleteBookModal';

interface ITableItemProps {
  item: IBook;
}

function BookTable() {
  const { currentBooks } = useBookContext();

  return (
    <table id="table-data" className="w-full mx-0 my-auto mt-8 rounded-md border-collapse">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Topic</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {currentBooks &&
          currentBooks.length > 0 &&
          currentBooks.map((item, index) => <TableItem key={index} item={item} />)}
      </tbody>
    </table>
  );
}

const TableItem = ({ item }: ITableItemProps) => (
  <tr>
    <td>{item.title}</td>
    <td>{item.author}</td>
    <td>{item.topic}</td>
    <td>
      <Link
        href={`/book/${item.id}`}
        className="px-[10px] py-[6px] bg-blue-500 text-white hover:bg-blue-700 mr-2 rounded-md text-sm"
      >
        View
      </Link>
      <DeleteBookModal item={item} />
    </td>
  </tr>
);

export default BookTable;
