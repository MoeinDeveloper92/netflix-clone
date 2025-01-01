import Image from 'next/image';
import backgroundImage from '@/public/login_background.jpg';
import logo from '@/public/netflix_logo.svg';
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col relative md:items-center bg-black md:justify-center md:bg-transparent">
      <Image
        src={backgroundImage}
        alt="Background Image"
        className="hidden sm:flex brightness-50  sm:object-cover -z-10"
        priority
        fill
      />
      <Image
        src={logo}
        alt="Netflix Logo"
        className=" absolute left-4 top-4 object-contain md:left-10 md:mt-6"
        width={120}
        height={120}
        priority
      />
      {children}
    </div>
  );
}
