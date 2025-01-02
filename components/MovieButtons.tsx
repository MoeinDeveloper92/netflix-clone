'use client';

import { InfoIcon, PlayCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import PlayVideoModel from './PlayVideoModel';

interface iAppProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}

export default function MovieButtons({
  age,
  duration,
  id,
  overview,
  releaseDate,
  title,
  youtubeUrl,
}: iAppProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-1 h-6 w-6" />
        Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className=" text-lg bg-white/60 text-black hover:bg-white/80 font-medium"
      >
        <InfoIcon className="mr-1 h-6 w-6" />
        Learn More
      </Button>

      <PlayVideoModel
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
        state={open}
        changeState={setOpen}
      />
    </>
  );
}
