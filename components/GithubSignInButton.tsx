'use client';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import github from '@/public/github.svg';
import { signIn } from 'next-auth/react';
type Props = {};

const GithubSignInButton = (props: Props) => {
  return (
    <Button
      asChild
      variant={'outline'}
      className="hover:bg-white cursor-pointer hover:bg-white/35"
      size={'icon'}
      onClick={() => signIn('github')}
    >
      <Image
        className="bg-white "
        src={github}
        width={10}
        height={10}
        alt="Github ICON"
      />
    </Button>
  );
};

export default GithubSignInButton;
