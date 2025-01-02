import { Prisma } from '@prisma/client';

export interface LinkProps {
  name: string;
  href: string;
}

export interface SelectedMoviesAttribute extends Prisma.MovieSelect {
  title: boolean;
  overview: boolean;
  videoSource: boolean;
  imageString: boolean;
  release: boolean;
  duration: boolean;
  id: boolean;
  age: boolean;
}
