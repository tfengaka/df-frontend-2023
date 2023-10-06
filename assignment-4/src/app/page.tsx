import { isNotFoundError } from 'next/dist/client/components/not-found';
import { notFound } from 'next/navigation';
import BookTable from '../components/BookTable';
import CreateBookModal from '../components/CreateBookModal';
import Pagination from '../components/Pagination';
import SearchBook from '../components/SearchBook';

export default async function Home() {
  try {
    return (
      <main className="flex flex-col items-center justify-between">
        <section className="w-full h-full px-10 py-5">
          <div className="w-full flex items-center justify-end gap-x-2">
            <SearchBook />
            <CreateBookModal />
          </div>
          <div className="relative w-full h-full">
            <BookTable />
            <Pagination />
          </div>
        </section>
      </main>
    );
  } catch (error) {
    if (isNotFoundError(error)) {
      notFound();
    }
    throw error;
  }
}
