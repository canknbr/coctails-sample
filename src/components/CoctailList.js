import React from 'react';
import Loading from './Loading';
import Coctails from './Coctails';
import { useGlobalContext } from '../pages/context';
const CoctailList = () => {
  const { coctails, isLoading } = useGlobalContext();
  if (coctails.length < 1) {
    return <p className="section-title">No results found.</p>;
  }
  return isLoading ? (
    <Loading />
  ) : (
    <section className="section">
      <h2 className="section-title">Coctails</h2>
      <div className="cocktails-center">
        {coctails.map(coctail => {
          return <Coctails key={coctail.id} {...coctail} />;
        })}
      </div>
    </section>
  );
};

export default CoctailList;
