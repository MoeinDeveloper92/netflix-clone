import Image from 'next/image';
import backgroundImage from '@/public/login_background.jpg';
import logo from '@/public/netflix_logo.svg';
import Navbar from '@/components/Navbar';
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
