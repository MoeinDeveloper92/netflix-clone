import { fetchMostRecentMovies } from '@/utils/fetchMovies';
import React, { Fragment } from 'react';
import MovieCard from './MovieCard';
const RecentlyAdded = async () => {
  const movies = await fetchMostRecentMovies();

  return (
    <Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Fragment>
  );
};

export default RecentlyAdded;
