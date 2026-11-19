import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery';
import BuyBox from '../BuyBox';
import ProductOptions from '../ProductOptions';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
    const [orderSuccess, setOrderSuccess] = useState(false);

    useEffect(() => {
        if (product) {
            setSelectedSize(product.sizes?.[0] || '');
            setSelectedColor(product.colors?.[0] || '');
            setOrderSuccess(false);
        }
    }, [product]);

    if (!product) return null;

    const galleryImages = product.images?.length
        ? product.images
        : [{ src: product.image, fallback: product.fallback }];

    const handleBuy = () => {
        const existingOrders = JSON.parse(
            localStorage.getItem('drip_store_orders') || '[]'
        );
        const newOrder = {
            orderNumber: `#DS-${Math.floor(100000 + Math.random() * 900000)}`,
            productId: product.id,
            productName: product.name,
            image: product.image,
            fallback: product.fallback,
            size: selectedSize,
            color: selectedColor,
            price: product.priceDiscount || product.price,
            status: 'Produto em trânsito',
            date: new Date().toLocaleDateString('pt-BR'),
        };
        localStorage.setItem(
            'drip_store_orders',
            JSON.stringify([newOrder, ...existingOrders])
        );
        setOrderSuccess(true);
    };

    return (
        <div>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="drip-breadcrumb">
                <Link to="/">Home</Link> / <Link to="/produtos">Produtos</Link> /{' '}
                <Link to={`/produtos?categoria=${encodeURIComponent(product.category)}`}>
                    {product.category}
                </Link>{' '}
                / <span className="fw-semibold">{product.name}</span>
            </nav>

            <div className="row g-4 g-lg-5 align-items-start">
                {/* 7.1 Galeria do Produto */}
                <div className="col-12 col-lg-7">
                    <Gallery
                        showThumbs
                        width="700px"
                        height="570px"
                        radius="4px"
                        images={galleryImages}
                    />
                </div>

                {/* 7.2 & 7.3 BuyBox + ProductOptions */}
                <div className="col-12 col-lg-5">
                    <BuyBox
                        name={product.name}
                        reference={product.reference}
                        stars={product.stars}
                        rating={product.rating}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        description={product.description}
                        onBuy={handleBuy}
                    >
                        {product.sizes?.length > 0 && (
                            <ProductOptions
                                label="Tamanho"
                                options={product.sizes}
                                radius="4px"
                                shape="square"
                                type="text"
                                selectedValue={selectedSize}
                                onSelect={setSelectedSize}
                            />
                        )}

                        {product.colors?.length > 0 && (
                            <ProductOptions
                                label="Cor"
                                options={product.colors}
                                shape="circle"
                                type="color"
                                selectedValue={selectedColor}
                                onSelect={setSelectedColor}
                            />
                        )}
                    </BuyBox>

                    {orderSuccess && (
                        <div
                            className="alert mt-3 d-flex align-items-center justify-content-between gap-2"
                            role="alert"
                            style={{
                                backgroundColor: '#e8f9ee',
                                borderColor: 'var(--success)',
                                color: 'var(--dark-gray)',
                                fontSize: '14px',
                            }}
                        >
                            <span>
                                Pedido realizado! (Tam: <strong>{selectedSize}</strong>)
                            </span>
                            <Link
                                to="/meus-pedidos"
                                className="fw-bold"
                                style={{ color: 'var(--primary)' }}
                            >
                                Ver pedidos →
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
