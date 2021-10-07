import React from 'react';
import axios from 'axios';

export const APIContext = React.createContext();

export const APIContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const deliveryUrl =
    'https://60e84194673e350017c21844.mockapi.io/api/deliveries';
  const [deliveriesList, setDeliveriesList] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(deliveryUrl);
        setDeliveriesList(data);
        setIsLoading(false);
        console.log(deliveriesList);
      } catch (error) {
        return console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <APIContext.Provider
      value={{
        deliveriesList,
        isLoading,
      }}>
      {children}
    </APIContext.Provider>
  );
};

export function useAPI() {
  const context = React.useContext(APIContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
