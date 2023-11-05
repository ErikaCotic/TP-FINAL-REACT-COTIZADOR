import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [form, setForm] = useState({});

  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((response) => response.json())
      .then((todos) => setPropiedades(todos));
  }, []);

  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
      .then((response) => response.json())
      .then((todos) => setUbicaciones(todos));
  }, []);

  const data = { propiedades, form, setForm, ubicaciones };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
