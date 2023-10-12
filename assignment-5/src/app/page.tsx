import { redirect } from 'next/navigation';

function HomePage() {
  return redirect('/book');
}

export default HomePage;
