import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './NameForm.css';

const NameForm = () => {
    const [inputName, setInputName] = useState('');
    const { setNombre } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputName.trim() !== '') {
            setNombre(inputName.trim());
        }
    };

    return (
        <div className="overlay">
            <form className="name-form" onSubmit={handleSubmit}>
                <h2>Ingrese su nombre</h2>
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Nombre"
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default NameForm;


