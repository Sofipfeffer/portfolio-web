import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='nombre'>
                <h1><span>Sofia</span> Pfefferkorn</h1>
            </div>
            <div class="wrapper">
                <a href="#" class="icon"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
            </div>
        </footer>
    );
};

export default Footer;