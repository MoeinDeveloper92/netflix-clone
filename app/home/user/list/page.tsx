import { authOptions } from '@/utils/authOptions';
import { fetchWatchList } from '@/utils/fetchMovies';
import Image from 'next/image';
import SingleMovieCard from '@/components/SingleMovieCard';
import { getServerSession } from 'next-auth';

export default async function WatchList() {
  const session = await getServerSession(authOptions);

  const data = await fetchWatchList(session?.user?.email as string);

  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your Watch List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:px-0 mt-10">
        {data.map((movie) => (
          <div className="relative h-60" key={movie.Movie?.id}>
            <Image
              src={movie.Movie?.imageString as string}
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full object-cover"
              alt="Movie"
            />
            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 border">
              <div className="bg-gradient-to-b from-transparent flex items-center justify-center via-black/50 to-black z-10 w-full h-full">
                <Image
                  src={movie.Movie?.imageString as string}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="object-cover absolute w-full h-full -z-10 rounded-lg"
                />
                <SingleMovieCard
                  key={movie?.Movie?.id}
                  age={movie?.Movie?.age as number}
                  movieId={movie?.Movie?.id as number}
                  overview={movie?.Movie?.overview as string}
                  time={movie?.Movie?.duration as number}
                  title={movie?.Movie?.title as string}
                  watchListId={movie?.Movie?.watchLists[0]?.id as string}
                  watchList={
                    (movie?.Movie?.watchLists.length as number) > 0
                      ? true
                      : false
                  }
                  year={movie?.Movie?.release as number}
                  youtubeUrl={movie?.Movie?.youtubeString as string}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
