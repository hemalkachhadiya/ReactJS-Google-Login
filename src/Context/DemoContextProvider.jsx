import React, { createContext, useEffect, useState } from "react";

const ActiveContext = createContext();

export const DemoContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <>
      <ActiveContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </ActiveContext.Provider>
    </>
  );
};

export default ActiveContext;
