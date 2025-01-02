import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/netflix_logo.svg';
import NavItems from './NavItems';
import RightSideNavbar from './RightSideNavbar';
const Navbar = () => {
  return (
    <nav className="sticky right-0 left-0 top-0 w-full max-w-7xl mx-auto flex items-center justify-between px-7 sm:px-6 py-7 lg:px-8">
      <div className="flex items-center">
        <Link className="w-32 " href={'/home'}>
          <Image src={logo} alt="Nextflix Logo" priority />
        </Link>
        <NavItems />
      </div>
      <RightSideNavbar />
    </nav>
  );
};

export default Navbar;
