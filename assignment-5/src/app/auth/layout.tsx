import React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen overflow-hidden bg-[#f4f7ff]">
      <section className="flex justify-center h-full items-center">
        <div className="bg-white rounded-lg shadow-sm w-full max-w-xl h-full max-h-[400px] p-8">{children}</div>
      </section>
    </main>
  );
}

export default AuthLayout;
