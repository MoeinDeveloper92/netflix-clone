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

export const fetchMostRecentMovies = async (userId: string) => {
  const movies = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      watchLists: {
        where: {
          userId,
        },
      },
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

export async function getCategory(category: string, userId: string) {
  switch (category) {
    case 'shows':
      const data = await prisma.movie.findMany({
        where: {
          category: 'show',
        },
        select: {
          age: true,
          id: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          duration: true,
          title: true,
          watchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    case 'movies': {
      const data = await prisma.movie.findMany({
        where: {
          category: 'movie',
        },
        select: {
          title: true,
          duration: true,
          id: true,
          age: true,
          imageString: true,
          overview: true,
          release: true,
          youtubeString: true,
          watchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }
    case 'recently': {
      const data = await prisma.movie.findMany({
        where: {
          category: 'recent',
        },
        select: {
          title: true,
          duration: true,
          id: true,
          age: true,
          imageString: true,
          overview: true,
          release: true,
          youtubeString: true,
          watchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }

    default: {
      throw new Error();
    }
  }
}

export const fetchWatchList = async (userId: string) => {
  const data = await prisma.watchList.findMany({
    where: {
      userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          release: true,
          id: true,
          watchLists: true,
          youtubeString: true,
          overview: true,
        },
      },
    },
  });

  return data;
};
