'use client';

import { useEffect } from 'react';

interface IProps {
    error: Error;
    reset: () => void;
}

const Error = ({ error, reset }: IProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}

export default Error