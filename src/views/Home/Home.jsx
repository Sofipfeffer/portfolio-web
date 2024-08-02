import Layout from "../../components/Layout/Layout.jsx";
import React, { useState } from 'react';
import './Home.css'; // Asegúrate de tener los estilos aquí

const Home = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (index) => {
        setActiveCard(index);
    };

    const cards = [
        { id: 1, title: 'GTA 6', imgSrc: 'DG-1.png' },
        { id: 2, title: 'Spider-Man PS5', imgSrc: 'DG-2.png' },
        { id: 3, title: 'God Of War', imgSrc: 'DG-3.png' },
        { id: 4, title: 'The Last of Us', imgSrc: 'DG-4.png' },
        { id: 5, title: 'Elden Ring', imgSrc: 'DG-5.png' }
    ];

    return (
        <Layout>
            <section className="presentacion">

                <img src="./public/inicio.png" alt="" />

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
                                <div className="profile-image">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2">
                                        <line x1="6" x2="10" y1="11" y2="11" />
                                        <line x1="8" x2="8" y1="9" y2="13" />
                                        <line x1="15" x2="15.01" y1="12" y2="12" />
                                        <line x1="18" x2="18.01" y1="10" y2="10" />
                                        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                                    </svg>
                                </div>

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
                        <img src="./public/Web-1.png" alt="Github" height="1em" />
                    </div>
                    <div data-text="" style={{ '--r': 5 }} className="glass">
                        <img src="./public/Web-2.png" alt="Code" height="1em" />
                    </div>
                    <div data-text="" style={{ '--r': 25 }} className="glass">
                        <img src="./public/Web-3.png" alt="Earn" height="1em" />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
