import { isNotFoundError } from 'next/dist/client/components/not-found';
import { notFound } from 'next/navigation';
import BookTable from '~/components/BookTable';
import CreateBook from '~/components/CreateBook';
import SearchInput from '~/components/SearchInput';

export default function BookHomePage() {
  try {
    return (
      <main className="flex flex-col items-center justify-between">
        <section className="w-full h-full px-10 py-5">
          <div className="w-full flex items-center justify-end gap-x-2">
            <SearchInput />
            <CreateBook />
          </div>
          <BookTable />
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
