import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";

function UbicacionElegida() {
  const { ubicaciones, form, setForm } = useContext(AppContext);

  const handleChange = (event) => {
    // console.log(event.target.value);
    const ubiElegida = ubicaciones.find((opcion) => opcion.id == event.target.value);
    // console.log(ubiElegida);

    setForm({ ...form, ubiElegida });
  };

  return (
    <>
      <label htmlFor="ubicacion">Selecciona su ubicación</label>
      <select
        className="input-group-text border border-dark"
        id="ubicacion"
        onChange={handleChange}
        required
      >
        <option value="" disabled="">...</option>
        {ubicaciones.map((ubicacion) => (
          <option key={ubicacion.id} value={ubicacion.id}>
            {ubicacion.tipo}
          </option>
        ))}
      </select>
    </>
  );
}

export default UbicacionElegida;
