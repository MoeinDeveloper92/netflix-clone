import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
type Props = {};

//here we get the user session from nextAuth and based on that we redirect the user
const page = async (props: Props) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  } else {
    return redirect('/home');
  }
};

export default page;
