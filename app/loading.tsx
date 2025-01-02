import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties } from 'react';
const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};
const loading = () => {
  return (
    <ClipLoader
      color={'#fff'}
      loading={true}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      className="z-50"
    />
  );
};

export default loading;
