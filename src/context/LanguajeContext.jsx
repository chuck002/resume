import { createContext, useState } from 'react';

// Crear el contexto
export const LanguajeContext = createContext();

// Crear un proveedor de contexto
export const LanguajeProvider = ({ children }) => {
  const [languaje, setLanguaje] = useState('spanish');

  const toggleLanguaje = () => {
    setLanguaje((prevTheme) => (prevTheme === 'spanish' ? 'english' : 'spanish'));
  };

  return (
    <LanguajeContext.Provider value={{ languaje, toggleLanguaje }}>
      {children}
    </LanguajeContext.Provider>
  );
};