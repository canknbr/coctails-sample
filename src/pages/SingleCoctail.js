import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const SingleCoctail = () => {
  const { id } = useParams();
  const [coctail, setCoctail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchCoctail = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}${id}`);
    if (response.ok) {
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const {
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strCategory,
          strGlass,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCoctail = {
          id,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strCategory,
          strGlass,
          strInstructions,
          ingredients,
        };
        setCoctail(newCoctail);
        setIsLoading(false);
        console.log(drinks[0]);
      }
    }
  };
  useEffect(() => {
    fetchCoctail();
  }, [id]);
  if (!coctail) {
    return <h2 className="section-title">not found</h2>;
  }
  return isLoading ? (
    <Loading />
  ) : (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back to Home{' '}
      </Link>
      <h2 className="section-title">{coctail.strDrink}</h2>
      <div className="drink">
        <img src={coctail.strDrinkThumb} alt={coctail.strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {coctail.strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {coctail.strCategory}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {coctail.strGlass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {coctail.strInstructions}
          </p>
          {/* <p>
            <span className="drink-data">ingredients :</span>
            {coctail.ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient}</span> : null;
            })}
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default SingleCoctail;
