// components/navbar/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary-1 w-full h-20 flex items-center  justify-end px-10 sticky top-0">
      <ul className="flex space-x-14">
        <li>
          <Link href="/" legacyBehavior>
            <a className="text-white hover:bg-primary-2 px-5 py-7 cursor-pointer">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/signin" legacyBehavior>
            <a className="text-white hover:bg-primary-2 px-5 py-7 cursor-pointer">
              About
            </a>
          </Link>
        </li>
      </ul>
      <Image src={logo} alt="logo" className="w-12 ml-20" />
    </nav>
  );
};

export default Navbar;
