import Layout from "../../components/Layout/Layout.jsx";
import React, { useState } from 'react';
import './Home.css'; // Asegúrate de tener los estilos aquí

const Home = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (index) => {
        setActiveCard(index);
    };

    const cards = [
        { id: 1, title: 'Diseño de identidad', imgSrc: 'DG-1.png' },
        { id: 2, title: 'Social media', imgSrc: 'DG-2.png' },
        { id: 3, title: 'Diseño de identidad', imgSrc: 'DG-3.png' },
        { id: 4, title: 'Social media', imgSrc: 'DG-4.png' },
        { id: 5, title: 'Diseño de identidad', imgSrc: 'DG-5.png' }
    ];

    return (
        <Layout>
            <section className="presentacion">

                <img src="/Inicio.png" alt="" />

                <div className="presentacion-texto">
                    <h1>¡HOLA! Soy Sofia Pfefferkorn</h1>
                    <p>Soy una apasionada del diseño gráfico, graduada de la UBA, y actualmente en camino de convertirme en programadora full stack en la UTN. Este portfolio es una ventana a mi mundo creativo, donde podrás conocerme mejor y descubrir algunos de mis trabajos más destacados. ¡Bienvenido y espero que disfrutes explorando mi obra!</p>
                </div>
            </section>

            <section className="diseno-grafico">
                <h1>Transformando Ideas en Imágenes</h1>
                <div className="container-dg">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`card ${activeCard === index ? 'active' : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <img className="background" src={card.imgSrc} alt={card.title} />

                            <div className="card-content">
                                <h3 className="title">{card.title}</h3>
                            </div>
                            <div className="backdrop"></div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="proyectos-web">
                <h1>Diseño y Código: Proyectos Web</h1>
                <div className="container-web">
                    <div data-text="" style={{ '--r': -15 }} className="glass">
                        <img src="/Web-1.png" alt="Idealo" height="1em" />
                    </div>
                    <div data-text="" style={{ '--r': 5 }} className="glass">
                        <img src="/Web-2.png" alt="Harry potter" height="1em" />
                    </div>
                    <div data-text="" style={{ '--r': 25 }} className="glass">
                        <img src="/Web-3.png" alt="CTPPM" height="1em" />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
