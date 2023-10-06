import React from 'react';
import Image from 'next/image';
import Avatar from '../assets/anonymous_avatar.png';

function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-white shadow-md z-40">
      <div className="flex items-center justify-between px-10 py-2">
        <h1 className="text-xl font-bold text-[#333] cursor-pointer">Book Store</h1>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Image src={Avatar} alt="avatar" width={40} height={40} className="rounded-full overflow-hidden" />
          <p className="text-sm font-bold">John Doe</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
