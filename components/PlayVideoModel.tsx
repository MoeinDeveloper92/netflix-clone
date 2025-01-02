import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: React.Dispatch<React.SetStateAction<boolean>>;
  release: number;
  age: number;
  duration: number;
}

const PlayVideoModel = ({
  changeState,
  overview,
  state,
  title,
  youtubeUrl,
  age,
  duration,
  release,
}: iAppProps) => {
  return (
    <Dialog open={state} onOpenChange={(newState) => changeState(newState)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-2 items-center">
            <p>{release}</p>
            <p className="border p-0.5 px-1 border-gray-200 rounded">{age} +</p>
            <p>{duration} h</p>
          </div>
        </DialogHeader>
        <iframe
          className="w-full rounded-lg"
          src={youtubeUrl}
          height={250}
          allowFullScreen
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideoModel;
