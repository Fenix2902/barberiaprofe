//import 'animate.css'
import { Link } from "react-router-dom"
export function Menu() {

    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top animate__animated animate__bounce">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <i className="bi bi-scissors"></i>
                        The Barber
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/lista">Lista de Reservas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )

}