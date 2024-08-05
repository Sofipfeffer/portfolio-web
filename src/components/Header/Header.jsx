import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
    const { nombre } = useContext(UserContext);

    return (
        <header className="header">
            <div className="left">
                <Link to="/">
                    <img src="/Foto-saludo.png" alt="Logo" />
                </Link>
                <span>¡Hola! {nombre}</span>
            </div>
            {/* <nav className="center">
                <a href="#sobre-mi">Sobre Mí</a>
                <a href="#diseno">Diseño</a>
                <a href="#programacion">Programación</a>
            </nav> */}
            <div className="right">
                <Link to="/contact">
                    <button>Heblemos</button>
                </Link>
                {/* <button onClick={() => {} >
                    Modo Oscuro/Claro
                </button> */}
            </div>
        </header>
    );
};

export default Header;
