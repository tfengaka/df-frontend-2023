import Link from 'next/link';
import React from 'react';

function NotFoundPage() {
  return (
    <main className="w-full h-full max-h-[300px] flex flex-col items-center justify-center gap-y-5 pt-32">
      <div>
        <h3 className="text-primary text-[120px] leading-6 font-bold mb-14">404</h3>
        <p className="text-[#333] font-medium text-lg text-center">Page not found</p>
      </div>
      <Link href="/" className="bg-primary text-white px-4 py-2 rounded-md shadow-md font-semibold hover:opacity-80">
        Back to home page
      </Link>
    </main>
  );
}

export default NotFoundPage;
