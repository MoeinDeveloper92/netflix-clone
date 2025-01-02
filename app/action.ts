'use server';
import { authOptions } from '@/utils/authOptions';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth/next';
export async function addToWatchList(formData: FormData) {
  // Heye this is server action and this should be only executed on the server
  'use server';
  const movieId = formData.get('movieId');
  const pathname = formData.get('pathname') as string;
  const session = await getServerSession(authOptions);

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
}

export const deleteFromWatchList = async (formData: FormData) => {
  'use server';
  const watchListId = formData.get('watchListId') as string;
  const pathname = formData.get('pathname') as string;

  const data = await prisma.watchList.delete({
    where: {
      id: watchListId,
    },
  });

  revalidatePath(pathname);
};
