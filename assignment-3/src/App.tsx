import './App.css';
import CreateItemModal from './components/CreateItemModal';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SearchInput from './components/SearchInput';
import TableData from './components/TableData';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <div className="search_wrapper">
            <SearchInput />
            <CreateItemModal />
          </div>
          <div className="table_wrapper">
            <TableData />
            <Pagination />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
