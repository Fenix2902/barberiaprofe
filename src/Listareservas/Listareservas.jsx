import { useState, useEffect } from "react";
import { consultarReservas } from "../services/servicioReserva";
import { Carga } from "../shared/Carga/Carga";
export function Listareservas() {
  //variables de estado
  //uso para almacenar los datos que lleguen del API
  const [reservas, setReserva] = useState(null);
  const [carga, setCarga] = useState(true);

  //programo el useEffect para garantizar que llamare al servicio solo cuando cargue mi componente

  useEffect(function () {
    consultarReservas().then(function (respuestaDelBack) {
      console.log(respuestaDelBack.reservas);
      setReserva(respuestaDelBack.reservas);
      setCarga(false);
    });
  }, []);

  //Programo la interfaz para mostrar el mensaje de carga o para mostrar los datos del servicio

  if (carga) {
    return (
      <>
        <Carga />
      </>
    );
  } else {
    return (
      <>
        <div className="container my-5 p-5">
          <div className="row row-cols-1 row-cols-md-4 g-3">
            {reservas.map(function (reserva) {
              return (
                <div key={reserva._id}>
                  <div className="col">
                    <div className="card h-100 shadow p-3">
                      <h5>Cliente: {reserva.nombre}</h5>
                      <h5>Correo: {reserva.correo}</h5>
                      <h5>Dia: {reserva.dia}</h5>
                      <h5>Hora: {reserva.hora}</h5>
                      <h5>Telefono: {reserva.telefono}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
