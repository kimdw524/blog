import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import SuspenseFallback from '@/components/common/SuspenseFallback';
import RecentPostList from '@/components/home/RecentPostList';

import * as s from './Home.css';

const Home = () => {
  return (
    <>
      <section className={s.container}>
        <h3>최근 게시글</h3>
        <ErrorBoundary fallback={<>error</>}>
          <Suspense
            fallback={
              <SuspenseFallback width="100%" height="15rem" padding="0 1rem" />
            }
          >
            <RecentPostList />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};

export default Home;
