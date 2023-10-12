'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuthContext } from '~/context/AuthContext';
import Avatar from '../assets/anonymous_avatar.png';
import Button from './Button';

function Header() {
  const router = useRouter();
  const { user, signOut } = useAuthContext();
  const [openPanel, setOpenPanel] = useState(false);

  const handleSignOut = () => {
    signOut();
    router.push('/auth/sign-in');
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-white shadow-md z-40">
      <div className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-extrabold text-primary cursor-pointer">
          Book Store
        </Link>
        <div className="relative">
          {user ? (
            <>
              <div
                className={`flex items-center gap-x-1 cursor-pointer hover:text-primary ${
                  openPanel ? 'text-primary' : 'text-slate-700'
                }`}
                onClick={() => setOpenPanel((prev) => !prev)}
              >
                <p className="text-base font-bold">{user.name}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-5 h-5 ${openPanel && 'rotate-180'} transition-all`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {openPanel && (
                <div className="absolute top-12 -right-1 bg-[#f4f7ff] shadow-md w-full min-w-[200px] p-2">
                  <div className="flex items-center gap-x-2 pb-2 mb-2 border-b border-slate-200">
                    <Image src={Avatar} width={36} height={36} alt="avatar" />
                    <span className="text-sm font-semibold text-slate-600 leading-none">{user.email}</span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Button className="bg-primary text-white w-full px-2 py-1.5" onClick={handleSignOut}>
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link
              href="/auth/sign-in"
              className="bg-primary text-white px-4 py-2 rounded-md shadow-md font-semibold hover:opacity-80"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
