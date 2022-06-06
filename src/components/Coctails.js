import React from 'react';
import { Link } from 'react-router-dom';
const Coctails = ({ id, name, image, info, glass }) => {
  return (
    <Link to={`/coctail/${id}`}>
      <article className="cocktail">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="coctail-footer">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
        </div>
      </article>
    </Link>
  );
};

export default Coctails;
