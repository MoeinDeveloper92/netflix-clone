'use client';
import { Heart, PlayCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import PlayVideoModel from './PlayVideoModel';
import { addToWatchList, deleteFromWatchList } from '@/app/action';
import { usePathname } from 'next/navigation';

interface iAppProps {
  title: string;
  movieId: number;
  overview: string;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

const SingleMovieCard = ({
  movieId,
  overview,
  title,
  watchList,
  watchListId,
  youtubeUrl,
  year,
  age,
  time,
}: iAppProps) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <div role="button">
      <button onClick={() => setOpen(true)}>
        <PlayCircle className="h-20 w-20 " />
      </button>
      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form action={deleteFromWatchList}>
            <input type="hidden" name="watchListId" value={watchListId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button size={'icon'} variant={'outline'}>
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addToWatchList}>
            <input type="hidden" value={movieId} name="movieId" />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant={'outline'} size={'icon'}>
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0 ">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border py-0.5 border-gray-200 rounded text-sm">
            {age} +
          </p>
          <p className="font-normal text-sm">{time} h</p>
        </div>
        <p className="line-clamp-1 text-gray-200 text-sm ">{overview}</p>
      </div>
      <PlayVideoModel
        youtubeUrl={youtubeUrl}
        key={movieId}
        title={title}
        overview={overview}
        changeState={setOpen}
        state={open}
        age={age}
        duration={time}
        release={year}
      />
    </div>
  );
};

export default SingleMovieCard;
