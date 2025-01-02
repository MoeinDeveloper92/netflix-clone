import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import GithubSignInButton from '@/components/GithubSignInButton';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';
type Props = {};

async function page({}: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect('/home');
  }
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl text-white font-semibold">Login</h1>
        <div className="space-y-4 mt-4">
          <Input
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
            type="email"
            name="email"
            placeholder="Email"
          />
          <Button
            type="submit"
            className="w-full bg-[#e50914] "
            variant={'destructive'}
          >
            Login
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-3 text-center">
        New to Netflix?{' '}
        <Link className="text-white hover:underline" href={'/register'}>
          Sign up now!
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-3 mt-5">
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
}

export default page;
