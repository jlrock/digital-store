import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Section from '../../components/Section';
import { allProducts } from '../../data/products';
import tshirtIcon from '../../assets/icons/category-tshirt.svg';
import pantsIcon from '../../assets/icons/category-pants.svg';
import capIcon from '../../assets/icons/category-cap.svg';
import headphoneIcon from '../../assets/icons/category-headphone.svg';
import sneakersIcon from '../../assets/icons/category-sneakers.svg';

const categoriesData = [
    { name: 'Tênis', description: 'Modelos para corrida, treino e streetwear', icon: sneakersIcon },
    { name: 'Camisetas', description: 'Drops exclusivos e malhas premium', icon: tshirtIcon },
    { name: 'Calças', description: 'Cargo, jogger e peças utilitárias', icon: pantsIcon },
    { name: 'Bonés', description: 'Aba curva, trucker e clássicos', icon: capIcon },
    { name: 'Headphones', description: 'Qualidade sonora e estilo urbano', icon: headphoneIcon },
];

const CategoriesPage = () => {
    return (
        <Layout>
            <div className="container py-5">
                <Section title="Todas as Categorias" titleAlign="left">
                    <div className="row g-4">
                        {categoriesData.map((category) => {
                            const count = allProducts.filter(
                                (p) => p.category.toLowerCase() === category.name.toLowerCase()
                            ).length;

                            return (
                                <div key={category.name} className="col-12 col-sm-6 col-lg-4">
                                    <Link
                                        to={`/produtos?categoria=${encodeURIComponent(category.name)}`}
                                        className="card h-100 border-0 shadow-sm text-decoration-none p-4"
                                        style={{ borderRadius: '8px', backgroundColor: 'var(--white)' }}
                                    >
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: 64,
                                                    height: 64,
                                                    backgroundColor: 'var(--light-gray-3)',
                                                    color: 'var(--primary)',
                                                }}
                                            >
                                                <img src={category.icon} alt={category.name} width={34} height={34} />
                                            </div>
                                            <div>
                                                <h3 className="h5 fw-bold mb-1" style={{ color: 'var(--dark-gray)' }}>
                                                    {category.name}
                                                </h3>
                                                <span style={{ fontSize: '13px', color: 'var(--primary)' }}>
                                                    {count} {count === 1 ? 'produto' : 'produtos'}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="mb-0" style={{ fontSize: '14px', color: 'var(--dark-gray-3)' }}>
                                            {category.description}
                                        </p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </Section>
            </div>
        </Layout>
    );
};

export default CategoriesPage;
