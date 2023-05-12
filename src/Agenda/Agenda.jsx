import { useState, useEffect } from "react";

export function Agenda() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("")
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")

  return (
    <>
      <form>
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
                className="form-control"
                placeholder="Nombre Cliente"
                onChange={(evento)=>{
                    setNombre(evento.target.value)
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
                className="form-control"
                placeholder="Correo cliente"
                onChange={(evento)=>{
                    setCorreo(evento.target.value)
                }}
              />
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
                className="form-control"
                placeholder="Telefono Cliente"
                onChange={(evento)=>{
                    setTelefono(evento.target.value)
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
                className="form-control"
                placeholder="fecha Cita"
                onChange={(evento)=>{
                    setFecha(evento.target.value)
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
                onChange={(evento)=>{
                    setHora(evento.target.value)
                }}
                className="form-select"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT">Hora:</option>
                <option value="1">6:30 am</option>
                <option value="2">7:00 am</option>
                <option value="3">7:30 am</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Reservar</button>
      </form>
    </>
  );
}
