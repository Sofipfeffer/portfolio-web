import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import './Header.css';

const Header = () => {
    const { nombre } = useContext(UserContext);

    return (
        <header className="header">
            <div className="left">
                <img src="../public/Foto-saludo.png" alt="Logo" />
                <span>¡Hola! {nombre}</span>
            </div>
            <nav className="center">
                <a href="#sobre-mi">Sobre Mí</a>
                <a href="#diseno">Diseño</a>
                <a href="#programacion">Programación</a>
            </nav>
            <div className="right">
                <button onClick={() => window.location.href = '#contacto'}>Contacto</button>
                <button onClick={() => { /* Funcionalidad para cambiar modo */ }}>
                    Modo Oscuro/Claro
                </button>
            </div>
        </header>
    );
};

export default Header;
