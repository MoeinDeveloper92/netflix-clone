import { SelectedMoviesAttribute } from '@/types/type';
import prisma from './db';

export const getData = async () => {
  const selected: SelectedMoviesAttribute = {
    title: true,
    overview: true,
    videoSource: true,
    imageString: true,
    release: true,
    duration: true,
    id: true,
    age: true,
  };

  const data = await prisma.movie.findFirst({ select: selected });
  return data;
};

export const fetchMostRecentMovies = async () => {
  const movies = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      watchLists: true,
      imageString: true,
      youtubeString: true,
      title: true,
      age: true,
      duration: true,
      release: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 4,
  });
  return movies;
};
