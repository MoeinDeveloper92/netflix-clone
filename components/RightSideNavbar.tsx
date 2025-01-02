import { Search, Bell } from 'lucide-react';
import React from 'react';
import UserNavigation from './UserNavigation';

const RightSideNavbar = () => {
  return (
    <div className="flex items-center gap-6">
      <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
      <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
      <UserNavigation />
    </div>
  );
};

export default RightSideNavbar;
