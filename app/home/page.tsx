import React, { Fragment } from 'react';
import Navbar from '@/components/Navbar';
import MovieVideo from '@/components/MovieVideo';
import RecentlyAdded from '@/components/RecentlyAdded';
type Props = {};

const Home = async (props: Props) => {
  return (
    <Fragment>
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded />
    </Fragment>
  );
};
export default Home;
