import React from 'react';
import { Link } from 'react-router-dom';
import { createProductFallback, handleImageError } from '../../utils/imageFallback';
import './SpecialOffer.css';

const SpecialOffer = () => {
    const fallbackImg = createProductFallback(
        'Air Jordan Collector',
        '#F6AA1C',
        'transparent',
        '#1F1F1F'
    );

    return (
        <section className="drip-special-offer">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6">
                        <div className="drip-special-offer-circle">
                            <img
                                src="/product-image-1.png"
                                alt="Air Jordan edição de colecionador"
                                className="img-fluid"
                                style={{ maxHeight: '320px', objectFit: 'contain' }}
                                onError={handleImageError(fallbackImg)}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <span className="drip-special-offer-eyebrow">Oferta especial</span>
                        <h2 className="drip-special-offer-title">
                            Air Jordan edição de colecionador
                        </h2>
                        <p className="drip-special-offer-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <Link
                            to="/product/1"
                            className="btn btn-drip-primary d-inline-flex align-items-center justify-content-center"
                            style={{ width: '200px', height: '42px', fontSize: '14px' }}
                        >
                            Ver Oferta
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
