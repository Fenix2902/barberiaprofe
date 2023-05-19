import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export function Agenda() {
  const [nombre, setNombre] = useState(null);
  const [correo, setCorreo] = useState(null);
  const [telefono, setTelefono] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState(null);

  const [errores, setErrores] = useState({});

  useEffect(
    function () {
      console.log(errores);
      console.log(Object.keys(errores));
      if (Object.keys(errores).length > 0) {
        //aca tengo errores
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      } else {
        //no hay errores
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    [errores]
  );

  function validarFormulario(evento) {
    evento.preventDefault();
    let listaErrores = {};
    if (!nombre) {
      listaErrores.nombre = "El nombre es obligatorio";
    }
    if (!correo) {
      listaErrores.correo = "El correo es obligatorio";
    }
    if (!telefono) {
      listaErrores.telefono = "El telefono es obligatorio";
    }
    if (!fecha) {
      listaErrores.fecha = "La fecha es obligatorio";
    }
    if (!hora) {
      listaErrores.hora = "La hora es obligatorio";
    }
    setErrores(listaErrores);
  }

  return (
    <>
      <form onSubmit={validarFormulario}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="input-group mb-3">
              <span
                className="input-group-text bi bi-person-circle"
                id="basic-addon1"
              ></span>
              <input
                id="nombre"
                type="text"
                className={`form-control ${
                  errores.nombre ? "is-invalid" : "is-valid"
                }`}
                placeholder="Nombre Cliente"
                value={nombre}
                onChange={(evento) => {
                  setNombre(evento.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group mb-3">
              <span
                className="input-group-text bi bi-envelope-at-fill"
                id="basic-addon1"
              ></span>
              <input
                id="correo"
                type="text"
                className={`form-control ${
                  errores.correo ? "is-invalid" : "is-valid"
                }`}
                value={correo}
                placeholder="Correo cliente"
                onChange={(evento) => {
                  setCorreo(evento.target.value);
                }}
              />
              <div class="invalid-feedback">Por favor ingresa tu nombre.</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3">
              <span
                className="input-group-text bi bi-telephone-fill"
                id="basic-addon1"
              ></span>
              <input
                id="telefono"
                type="text"
                className={`form-control ${
                  errores.telefono ? "is-invalid" : "is-valid"
                }`}
                value={telefono}
                placeholder="Telefono Cliente"
                onChange={(evento) => {
                  setTelefono(evento.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="input-group mb-3">
              <span
                className="input-group-text bi bi-calendar-week-fill"
                id="basic-addon1"
              ></span>
              <input
                id="fecha"
                type="date"
                className={`form-control ${
                  errores.fecha ? "is-invalid" : "is-valid"
                }`}
                value={fecha}
                placeholder="fecha Cita"
                onChange={(evento) => {
                  setFecha(evento.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group mb-3">
              <span
                className="input-group-text bi bi-alarm-fill"
                id="basic-addon1"
              ></span>
              <select
                id="hora"
                onChange={(evento) => {
                  setHora(evento.target.value);
                }}
                className={`form-select ${
                  errores.hora ? "is-invalid" : "is-valid"
                }`}
                value={hora}
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT">Hora:</option>
                <option value="1">6:30 am</option>
                <option value="2">7:00 am</option>
                <option value="3">7:30 am</option>
              </select>
              <div class="invalid-feedback">Por favor selecciona una hora.</div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Agendar
        </button>
      </form>
    </>
  );
}
