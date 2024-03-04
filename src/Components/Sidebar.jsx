import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
                <Link to="/home">Inicio</Link>
            </li>
            <li>
                <Link to="/user">Usuario</Link>
            </li>
            <li>
                <Link to="/rol">Rol</Link>
            </li>
            <li>
                <Link to="/categoria">Categoria</Link>
            </li>
            <li>
                <Link to="/identificacion">Tipo identificacion</Link>
            </li>
            <li>
                <Link to="/servicios">Servicios</Link>
            </li>
            <li>
                <Link to="/reservaespacios">Reservas Espacios</Link>
            </li>
            <li>
                <Link to="/tipodesalas">Tipo de Salas</Link>
            </li>
            <li>
                <Link to="/reserva">Reserva</Link>
            </li>
            <li>
                <Link to="/calificacion">Calificacion</Link>
            </li>
            <li>
                <Link to="/imagenes">Imagenes</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar