import React from 'react';
import SearchForm from '../components/SearchForm';
import CoctailList from '../components/CoctailList';
import Loading from '../components/Loading';
const Home = () => {
  return (
    <main>
      <SearchForm />
      <CoctailList />
    </main>
  );
};

export default Home;
