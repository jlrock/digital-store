import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout.jsx';
import ProductDetails from '../../components/ProductDetails';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import { allProducts } from '../../data/products';

const ProductViewPage = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    const product =
        allProducts.find((item) => String(item.id) === String(id)) || allProducts[0];

    const recommendedProducts = allProducts
        .filter((item) => item.id !== product.id)
        .slice(0, 4);

    return (
        <Layout>
            <div className="container py-5">
                {/* 7.1 Galeria + 7.2 ProductOptions + 7.3 BuyBox */}
                <ProductDetails product={product} />

                {/* 7.4 Produtos recomendados */}
                <div className="mt-5 pt-4">
                    <Section
                        title="Produtos recomendados"
                        titleAlign="left"
                        link={{ text: 'Ver todos', href: '/products' }}
                    >
                        <ProductListing products={recommendedProducts} columns={4} />
                    </Section>
                </div>
            </div>
        </Layout>
    );
};

export default ProductViewPage;
