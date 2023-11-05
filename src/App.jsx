import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cotizador from "./Cotizador";
import Header from "./Header";
import Historial from "./Historial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Cotizador} />
          <Route path="/Header" Component={Header} />
          <Route path="/historial" Component={Historial} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
