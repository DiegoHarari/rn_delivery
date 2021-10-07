import React, {createContext, useContext, useReducer} from 'react';

const StoreContext = createContext();
const initialState = {active: false};

const reducer = (initialState, action) => {
  switch (action.type) {
    case 'active':
      return {
        active: true,
      };
    case 'inactive':
      return {
        active: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
