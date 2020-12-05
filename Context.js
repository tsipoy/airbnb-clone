import React, { useState, useEffect } from "react";
import Stays from "./stays.json";

const Context = React.createContext();
function ContextProvider({ children }) {
  const [stays, setStays] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState([]);
  
  const cities = stays.filter((stay) =>
    stay.city.toLowerCase().includes(inputValue.toLowerCase())
  );

  function openPopup() {
    setIsOpened(true);
  }

  function closePopup() {
    setIsOpened(false);
  }

  useEffect(() => {
    setStays(cities);
  }, [location, inputValue]);

  useEffect(() => {
    setStays(Stays);
  }, []);

  return (
    <Context.Provider
      value={{
        stays,
        openPopup,
        isOpened,
        closePopup,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
