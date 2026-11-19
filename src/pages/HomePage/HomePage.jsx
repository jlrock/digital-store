import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import SpecialOffer from '../../components/SpecialOffer';
import {
    allProducts,
    featuredCollections,
    homeSlides,
} from '../../data/products';
import { handleImageError } from '../../utils/imageFallback';
import tshirtIcon from '../../assets/icons/category-tshirt.svg';
import pantsIcon from '../../assets/icons/category-pants.svg';
import capIcon from '../../assets/icons/category-cap.svg';
import headphoneIcon from '../../assets/icons/category-headphone.svg';
import sneakersIcon from '../../assets/icons/category-sneakers.svg';
import './HomePage.css';

const categoryShortcutItems = [
    { label: 'Camisetas', icon: tshirtIcon },
    { label: 'Calças', icon: pantsIcon },
    { label: 'Bonés', icon: capIcon },
    { label: 'Headphones', icon: headphoneIcon },
    { label: 'Tênis', icon: sneakersIcon },
];

const HomePage = () => {
    const trendingProducts = allProducts.slice(0, 8);

    return (
        <Layout>
            {/* 5.1 Slide de imagens */}
            <Gallery width="1440px" height="681px" images={homeSlides} />

            {/* 5.2 Coleções em destaque */}
            <div className="container py-5">
                <Section title="Coleções em destaque" titleAlign="center">
                    <div className="row g-4">
                        {featuredCollections.map((collection) => (
                            <div key={collection.id} className="col-12 col-md-4">
                                <Link
                                    to={collection.categoryLink}
                                    className="drip-collection-link d-block"
                                >
                                    <img
                                        src={collection.image}
                                        alt={collection.title}
                                        className="drip-home-collections-img"
                                        style={{ borderRadius: '4px' }}
                                        onError={handleImageError(collection.fallback)}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Ícones de categorias em destaque (Fidelidade ao Figma) */}
                <div className="mt-5 pt-3">
                    <Section title="Coleções em destaque" titleAlign="center">
                        <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 mt-3">
                            {categoryShortcutItems.map((cat) => (
                                <Link
                                    key={cat.label}
                                    to={`/produtos?categoria=${encodeURIComponent(cat.label)}`}
                                    className="drip-category-item d-flex flex-column align-items-center text-decoration-none"
                                >
                                    <div className="drip-category-circle">
                                        <img src={cat.icon} alt={cat.label} width={48} height={48} />
                                    </div>
                                    <span className="drip-category-label">{cat.label}</span>
                                </Link>
                            ))}
                        </div>
                    </Section>
                </div>

                {/* 5.3 Produtos em alta (8 produtos) */}
                <div className="mt-5 pt-4 pb-3">
                    <Section
                        title="Produtos em alta"
                        titleAlign="left"
                        link={{ text: 'Ver todos', href: '/produtos' }}
                    >
                        <ProductListing products={trendingProducts} columns={4} />
                    </Section>
                </div>
            </div>

            {/* Oferta especial do Figma */}
            <SpecialOffer />
        </Layout>
    );
};

export default HomePage;
