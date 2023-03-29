import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


export default function Navbar() {

    return (
        <div className="containerNav">
            <nav className="navBar">
                <div className="navLogo">
                    <Link to="/" className="logo">
                        <img
                            src="" alt="Logo-BeLife"
                        />
                    </Link>
                </div>
                <ul className="navList">
                    <li className="navItem">
                        <Link to="/" className="">Inicio</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/productos" className="">Productos</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/sintacc" className="">Sin TACC</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/veggies" className="">Veggies</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/Suplementos" className="">Suplementos</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/nosotros" className="">Quienes Somos</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/contacto" className="">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
