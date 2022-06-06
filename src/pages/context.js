import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({ children }) => {
  const [coctails, setCoctails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');

  const fetchCoctails = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}${searchTerm}`);
    if (response.ok) {
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCoctails = drinks.map(coctail => {
          return {
            id: coctail.idDrink,
            name: coctail.strDrink,
            image: coctail.strDrinkThumb,
            info: coctail.strAlcoholic,
            glass: coctail.strGlass,
          };
        });
        setCoctails(newCoctails);
        setIsLoading(false);
      } else {
        setCoctails([]);
      }
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCoctails();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{
        coctails,
        isLoading,
        setSearchTerm,
        searchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider, AppContext };
