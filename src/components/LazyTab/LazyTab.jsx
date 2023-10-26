import React from 'react';
import { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';

const LazyTab = ({ tab }) => {
  const LazyTab = lazy(() => import(`../../${tab.path}`));
  return (
    <Suspense fallback={<Loader />}>
      <LazyTab />
    </Suspense>
  );
};

export default LazyTab;
