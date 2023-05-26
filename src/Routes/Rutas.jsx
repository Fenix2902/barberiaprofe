import { Route, Routes } from "react-router-dom"

import { Home } from '../Home/Home'
import { Menu } from "../shared/Menu/Menu"
import { Listareservas } from "../Listareservas/Listareservas"

export function Rutas() {
    return (
        <>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lista" element={<Listareservas/>}/>
            </Routes>

        </>

    )
}