'use client';

import Link from 'next/link';
import { useBookContext } from '~/context/BookContext';
import DeleteBookModal from './DeleteBook';
import EditBook from './EditBook';
import TablePagination from './TablePagination';

interface ITableItemProps {
  item: IBook;
}

function BookTable() {
  const { currentBooks } = useBookContext();

  return (
    <div className="relative w-full h-full">
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
      <TablePagination />
    </div>
  );
}

const TableItem = ({ item }: ITableItemProps) => (
  <tr>
    <td>{item.title}</td>
    <td>{item.author}</td>
    <td>{item.topic}</td>
    <td>
      <div className="flex items-center gap-x-2">
        <Link
          href={`/book/${item.id}`}
          className="px-[10px] py-[6px] bg-blue-500 text-white hover:bg-blue-700 rounded-md text-sm"
        >
          View
        </Link>
        <EditBook data={item} />
        <DeleteBookModal item={item} />
      </div>
    </td>
  </tr>
);

export default BookTable;
