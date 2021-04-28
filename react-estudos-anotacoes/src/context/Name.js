import React, { createContext, useState, useContext } from 'react';

const NameContext = createContext();

export default function NameProvider({ children }) {
  const [name, setName] = useState('');

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

export function useName() {
  const context = useContext(NameContext);
  const { name, setName } = context;
  return { name, setName };
}
