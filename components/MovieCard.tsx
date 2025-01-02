import Image from 'next/image';
import React from 'react';
import { WatchList } from '@prisma/client';
import SingleMovieCard from './SingleMovieCard';
type MovieCardProps = {
  movie: {
    id: number;
    overview: string;
    watchLists: WatchList[];
    imageString: string;
    youtubeString: string;
    title: string;
    release: number;
    age: number;
    duration: number;
  };
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative h-48 object-cover">
      <Image
        src={movie.imageString}
        alt="Movie"
        className="w-full h-full absolute rounded-sm"
        width={500}
        height={400}
      />
      <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
        <div className="bg-gradient-to-b from-transparent via-black/50 to black border cursor-pointer z-10 h-full rounded-lg flex items-center justify-center">
          <Image
            src={movie.imageString}
            alt="Movie"
            width={800}
            height={800}
            className=" absolute w-full h-full -z-10 rounded-lg object-cover"
          />
          <SingleMovieCard
            movieId={movie.id}
            overview={movie.overview}
            title={movie.title}
            watchList={movie.watchLists.length > 0 ? true : false}
            youtubeUrl={movie.youtubeString}
            watchListId={movie.watchLists[0]?.id}
            year={movie.release}
            age={movie.age}
            time={movie.duration}
            key={movie.id}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
