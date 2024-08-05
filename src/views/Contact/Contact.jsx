import Layout from "../../components/Layout/Layout.jsx";
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import '../Contact/Contact.css';

const Contact = () => {
    const { nombre } = useContext(UserContext);

    return (
        <Layout>
            <section className="contact">
                <h2>{nombre} ¿En qué te puedo ayudar?</h2>
                <form action="https://formsubmit.co/idealo.dg@gmail.com" method="post">
                    <div>
                        <label for="name"> Nombre
                            <input type="text" placeholder="Ingrese su nombre" required />
                        </label>
                    </div>
                    <div>
                        <label for="email"> Email
                            <input type="email" placeholder="Ingrese su email" required />
                        </label>
                    </div>
                    <div>
                        <label for="Message"> ¿En qué te podemos ayudar?
                            <textarea id="message" placeholder="Ingrese su mensaje"></textarea>
                        </label>
                    </div>
                    <button>Enviar</button>
                </form>
            </section>
        </Layout>
    );
};

export default Contact;
