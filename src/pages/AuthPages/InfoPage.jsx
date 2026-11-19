import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout.jsx';

const InfoPage = ({ title, subtitle, isNotFound = false }) => {
    return (
        <Layout>
            <div className="container py-5">
                <div className="card border-0 shadow-sm p-4 p-md-5" style={{ borderRadius: '4px' }}>
                    <h1 className="h2 fw-bold mb-3" style={{ color: 'var(--dark-gray)' }}>
                        {title}
                    </h1>
                    <p className="mb-4" style={{ color: 'var(--dark-gray-2)', maxWidth: '650px' }}>
                        {subtitle}
                    </p>
                    <div>
                        <Link
                            to={isNotFound ? '/' : '/produtos'}
                            className="btn btn-drip-primary px-4 py-2"
                        >
                            {isNotFound ? 'Voltar para Home' : 'Explorar Produtos'}
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default InfoPage;
