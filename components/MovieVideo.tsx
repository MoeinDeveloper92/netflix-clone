import { getData } from '@/utils/fetchMovies';
import React from 'react';
import { Button } from './ui/button';
import MovieButtons from './MovieButtons';

const MovieVideo = async () => {
  const movie = await getData();
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        src={movie?.videoSource}
        poster={movie?.imageString}
        autoPlay
        loop
        controls
        className="w-screen absolute top-0 left-0 h-[60vh] object-cover  -z-10 brightness-75"
      ></video>
      <div className=" flex flex-col items-start w-[90%] lg:w-[40%] max-sm:items-center max-sm:mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {movie?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3 max-sm:text-center">
          {movie?.overview}
        </p>
        <div className="flex gap-3 mt-4 ">
          <MovieButtons
            age={movie?.age as number}
            duration={movie?.duration ?? 0}
            id={movie?.id as number}
            overview={movie?.overview ?? ''}
            releaseDate={movie?.release as number}
            title={movie?.title ?? ''}
            youtubeUrl={movie?.youtubeString as string}
            key={movie?.id}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieVideo;

//We should add video here....
//fetch the movies from database
