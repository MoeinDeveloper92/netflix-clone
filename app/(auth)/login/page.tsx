import React from 'react';
import google from '@/public/google.svg';
import github from '@/public/github.svg';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
type Props = {};

function page({}: Props) {
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
        <Button
          asChild
          variant={'outline'}
          className="hover:bg-white cursor-pointer hover:bg-white/35"
          size={'icon'}
        >
          <Image
            className="bg-white "
            src={github}
            width={10}
            height={10}
            alt="Github ICON"
          />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <Image src={google} alt="Google Tag" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}

export default page;
