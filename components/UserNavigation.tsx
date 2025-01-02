'use client';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const UserNavigation = () => {
  const router = useRouter();
  const handleSignOut = () => {
    signOut({ callbackUrl: '/login' });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src={''} className="rounded-full" />
            <AvatarFallback className="rounded-sm ">Jan</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Moein</p>
            <p className="text-sm leading-none text-muted-foreground ">
              Moein@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNavigation;
