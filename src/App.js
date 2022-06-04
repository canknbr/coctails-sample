import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Error = lazy(() => import('./pages/Error'));
const SingleCoctail = lazy(() => import('./pages/SingleCoctail'));
const App = () => {
  return (
    <>
      <Routes>
        <Suspense fallback={<Loading />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coctail/:id" element={<SingleCoctail />} />
          <Route path="*" element={<Error />} />
        </Suspense>
      </Routes>
    </>
  );
};

export default App;
