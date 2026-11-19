import React from 'react';
import ProductCard from '../ProductCard';
import './ProductListing.css';

const ProductListing = ({ products = [], columns = 4 }) => {
    if (!products.length) {
        return (
            <div className="drip-product-listing-empty">
                <p className="mb-2 fw-semibold fs-5" style={{ color: 'var(--dark-gray-2)' }}>
                    Nenhum produto encontrado
                </p>
                <p className="mb-0" style={{ fontSize: '14px' }}>
                    Tente ajustar os filtros ou buscar por outro termo.
                </p>
            </div>
        );
    }

    const colClass =
        columns === 3
            ? 'col-12 col-sm-6 col-xl-4'
            : 'col-12 col-sm-6 col-md-4 col-lg-3';

    return (
        <div className="row g-4">
            {products.map((product, index) => (
                <div key={product.id ?? `${product.name}-${index}`} className={colClass}>
                    <ProductCard
                        id={product.id ?? index + 1}
                        image={product.image || product.imagem}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        fallback={product.fallback}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductListing;
