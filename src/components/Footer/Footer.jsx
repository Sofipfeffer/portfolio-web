import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='nombre'>
                <h1><span>Sofia</span> Pfefferkorn</h1>
            </div>
            <div class="wrapper">
                <a href="https://www.instagram.com/creatividad.sofii/" class="icon" target='blank'><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/sofia-pfefferkorn-349ba7191/" class="icon" target='blank'><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/Sofipfeffer" class="icon" target='blank'><i class="fa-brands fa-github"></i></a>
            </div>
        </footer>
    );
};

export default Footer;