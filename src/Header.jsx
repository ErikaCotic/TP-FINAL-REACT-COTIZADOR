import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
     <div class="historial"><Link to={"historial"}>
      <button class="btn btn-primary btn-outline-da">
          <span title="Ver Historial">📋</span>
        </button>
      </Link>
      </div> 
      <h1 class="center separador">Seguros del hogar 🏡</h1>
    </>
  );
}

export default Header;
