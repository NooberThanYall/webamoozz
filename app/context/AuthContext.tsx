import { cookies } from "next/headers";
import { createContext, useContext, useEffect, useReducer } from "react";
import React from "react";

const AuthContext = createContext(null);
const reducer = (state, action) => {
  switch (action) {
    case "logUserIn":
      return { user: action.payload };
    case "logUserOut":
      return { user: null };

    default:
      break;
  }
};


export const AuthContextProvider = ({user, children }) => {
  const [state, dispatch] = useReducer(reducer, {user: user});

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
