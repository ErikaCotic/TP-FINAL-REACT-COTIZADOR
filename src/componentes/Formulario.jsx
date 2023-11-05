import MetrosCuadrados from "./MetrosCuadrados"
import PropiedadElegida from "./PropiedadElegida"
import UbicacionElegida from "./UbicacionElegida"
import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";


function Formulario() {
    const costoM2 = 35.86
    
    const { form } = useContext(AppContext);

    function cotizar(event){
        event.preventDefault();
        
        let metros = form.metros;
        let propE = form.propElegida.tipo;
        let ubiE = form.ubiElegida.tipo;

        let resul = metros * form.propElegida.factor * form.ubiElegida.factor * costoM2;
        
        let hora = new Date().toLocaleString()
        
        imprimirPoliza(resul)

        guardarEnHistorial(hora, resul, propE, ubiE, metros)
    }

    const guardarEnHistorial = (hora, resul, propE, ubiE, metros)=> {
        const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []

        const cotizacion = {
                            fecha: hora,
                            propiedad: propE,
                            ubicacion: ubiE,
                            metros: metros,
                            poliza: resul.toFixed(2),
                            id: historialCotizaciones.length+1
                           }
        
              historialCotizaciones.push(cotizacion)
              localStorage.setItem("historialCotizaciones", JSON.stringify(historialCotizaciones))
    }

    const imprimirPoliza = (resul) => {
        let valorPoliza = document.getElementById('valorPoliza');
        valorPoliza.innerText = resul.toFixed(2);
    }

    return (
        <>
            <div id="inicio" class="center div-cotizador">
                <h2 class= "center separador">Completa los datos solicitados</h2>
                <form className="d-flex flex-column align-items-center" onSubmit={cotizar}>

                    <PropiedadElegida/>

                    <UbicacionElegida/>
                    
                    <MetrosCuadrados/>
                    <button className="btn  btn-outline-dark">COTIZAR</button>
                </form>
                
                <p>Precio estimado: $ 
                    <span id="valorPoliza">0.00</span>
                </p>
            </div>
        </>
    )
}

export default Formulario