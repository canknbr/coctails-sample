import React, { useRef } from 'react';
import { useGlobalContext } from '../pages/context';
const SearchForm = () => {
  const inputFocus = useRef(null);
  const { setSearchTerm } = useGlobalContext();
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    inputFocus.current.focus();
  }, []);
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search</label>
          <input
            ref={inputFocus}
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
