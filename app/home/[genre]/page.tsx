import { authOptions } from '@/utils/authOptions';
import { getCategory, getData } from '@/utils/fetchMovies';
import React from 'react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import SingleMovieCard from '@/components/SingleMovieCard';

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ genre: string }>;
}) => {
  const session = await getServerSession(authOptions);
  const { genre } = await params;
  const data = await getCategory(genre, session?.user?.email as string);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:px-0 mt-10">
      {data.map((movie) => (
        <div className="relative h-60" key={movie.id}>
          <Image
            src={movie.imageString}
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
            alt="Movie"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 border">
            <div className="bg-gradient-to-b from-transparent flex items-center justify-center via-black/50 to-black z-10 w-full h-full">
              <Image
                src={movie.imageString}
                alt="Movie"
                width={800}
                height={800}
                className="object-cover absolute w-full h-full -z-10 rounded-lg"
              />
              <SingleMovieCard
                key={movie?.id}
                age={movie.age}
                movieId={movie?.id}
                overview={movie.overview}
                time={movie.duration}
                title={movie.title}
                watchListId={movie.watchLists[0]?.id}
                watchList={movie.watchLists.length > 0 ? true : false}
                year={movie.release}
                youtubeUrl={movie.youtubeString}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
