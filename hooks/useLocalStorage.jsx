import React, { useState } from "react";

function useLocalStorage({ key, value }) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    item !== undefined ? JSON.parse(item) : value;
  });

  const setValue = (newValue) => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
