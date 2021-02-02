import React, { memo, ReactNode } from 'react';

interface Props {
  isFetching: boolean;
  error: null | string;
  children: ReactNode;
}

export const PageWrapper: React.FC<Props> = memo(
  ({ isFetching, error, children }) => {
    if (error) {
      return <p>error</p>;
    }

    if (isFetching) {
      return <p>loading</p>;
    }
    return <div>{children}</div>;
  }
);
