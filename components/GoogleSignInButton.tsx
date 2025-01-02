'use client';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import google from '@/public/google.svg';
import { signIn } from 'next-auth/react';
type Props = {};

const GoogleSignInButton = (props: Props) => {
  return (
    <Button onClick={() => signIn('google')} variant={'outline'} size={'icon'}>
      <Image src={google} alt="Google Tag" className="w-6 h-6" />
    </Button>
  );
};

export default GoogleSignInButton;
