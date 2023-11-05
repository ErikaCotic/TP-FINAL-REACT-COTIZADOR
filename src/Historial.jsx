import * as React from "react";
import { Link } from "react-router-dom";
import Grilla from "./componentes/Grilla";

function Historial() {

    return (
        <>
         <h1 class="center separador">Ver Historial 📋</h1>
        <div class = "center div-cotizador">
            <Grilla />
            <Link to={"/"}>
                <button className="btn  btn-outline-dark">
                    VOLVER
                </button>
            </Link>
            </div>
        </>
    )
}

export default Historial
