'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/constants';
import Link from 'next/link';
const NavItems = () => {
  const pathName = usePathname();
  return (
    <ul className="lg:flex gap-4 ml-14 hidden">
      {navItems.map((link, i) => (
        <div key={i}>
          <Link
            href={link.href}
            className={`${
              pathName === link.href
                ? 'text-white border-b border-white font-semibold '
                : 'text-gray-300'
            }`}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </ul>
  );
};

export default NavItems;
