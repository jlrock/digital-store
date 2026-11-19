import React from 'react';
import Logo from '../Logo';
import Informations from './Informations.jsx';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import './Footer.css';

const aboutInformations = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Segurança', link: '/security' },
    { text: 'Wishlist', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/careers' },
    { text: 'Meus Pedidos', link: '/meus-pedidos' },
];

const categoryInformations = [
    { text: 'Camisetas', link: '/produtos?categoria=Camisetas' },
    { text: 'Calças', link: '/produtos?categoria=Calças' },
    { text: 'Bonés', link: '/produtos?categoria=Bonés' },
    { text: 'Headphones', link: '/produtos?categoria=Headphones' },
    { text: 'Tênis', link: '/produtos?categoria=Tênis' },
];

const contactInformations = [
    {
        text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
        link: 'https://maps.google.com/?q=Av.+Santos+Dumont+1510+Fortaleza+CE',
    },
    {
        text: '(85) 3051-3411',
        link: 'tel:+558530513411',
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="drip-footer">
            <div className="container">
                <div className="row gy-5 justify-content-between">
                    <div className="col-12 col-lg-4">
                        <Logo variant="footer" />
                        <p className="drip-footer-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore.
                        </p>
                        <div className="drip-footer-socials">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="drip-footer-social-link"
                                aria-label="Facebook"
                            >
                                <img src={facebookIcon} alt="Facebook" width={20} height={20} />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="drip-footer-social-link"
                                aria-label="Instagram"
                            >
                                <img src={instagramIcon} alt="Instagram" width={20} height={20} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="drip-footer-social-link"
                                aria-label="Twitter"
                            >
                                <img src={twitterIcon} alt="Twitter" width={20} height={20} />
                            </a>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                        <Informations title="Informação" informations={aboutInformations} />
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                        <Informations title="Categorias" informations={categoryInformations} />
                    </div>

                    <div className="col-12 col-md-4 col-lg-3">
                        <Informations title="Contato" informations={contactInformations} />
                    </div>
                </div>

                <hr className="drip-footer-divider" />
                <p className="drip-footer-copyright">© {currentYear} Digital Store</p>
            </div>
        </footer>
    );
};

export default Footer;
