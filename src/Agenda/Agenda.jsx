export function Agenda() {

    return (

        <>

            <form>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text bi bi-person-circle" id="basic-addon1"></span>
                            <input type="text" className="form-control" placeholder="Nombre Cliente" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text bi bi-envelope-at-fill" id="basic-addon1"></span>
                            <input type="text" className="form-control" placeholder="Correo cliente" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text bi bi-telephone-fill" id="basic-addon1"></span>
                            <input type="text" className="form-control" placeholder="Telefono Cliente" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text bi bi-calendar-week-fill" id="basic-addon1"></span>
                            <input type="date" className="form-control" placeholder="fecha Cita" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text bi bi-alarm-fill" id="basic-addon1"></span>
                            <select className="form-select"  defaultValue={'DEFAULT'}>
                                <option value="DEFAULT">Hora:</option>
                                <option value="1">6:30 am</option>
                                <option value="2">7:00 am</option>
                                <option value="3">7:30 am</option>
                            </select>
                        </div>
                    </div>
                </div>



            </form>


        </>
    )

}