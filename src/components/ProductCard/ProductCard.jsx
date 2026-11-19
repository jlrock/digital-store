import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { createProductFallback, handleImageError } from '../../utils/imageFallback';
import './ProductCard.css';

const ProductCard = ({
    id = 1,
    image,
    imagem,
    name,
    category,
    price,
    priceDiscount,
    fallback,
}) => {
    const imageSrc = image || imagem;
    const fallbackImg = fallback || createProductFallback(name || 'Produto');
    const hasDiscount =
        typeof priceDiscount === 'number' && priceDiscount > 0 && priceDiscount < price;

    const discountPercent = hasDiscount
        ? Math.round(((price - priceDiscount) / price) * 100)
        : 0;

    return (
        <Link to={`/product/${id}`} className="drip-product-card">
            <div className="drip-product-card-img-box">
                {hasDiscount && discountPercent > 0 && (
                    <span className="drip-product-discount-badge">{discountPercent}% OFF</span>
                )}
                <img
                    src={imageSrc || fallbackImg}
                    alt={name}
                    className="drip-product-card-img"
                    width={292}
                    height={321}
                    onError={handleImageError(fallbackImg)}
                />
            </div>

            {category && <span className="drip-product-category">{category}</span>}

            <h3 className={`drip-product-name ${!category ? 'mt-3' : ''}`}>{name}</h3>

            <div className="drip-product-prices">
                {hasDiscount ? (
                    <>
                        <span className="drip-product-price--old">{formatPrice(price)}</span>
                        <span className="drip-product-price--discount">
                            {formatPrice(priceDiscount)}
                        </span>
                    </>
                ) : (
                    <span className="drip-product-price">{formatPrice(price)}</span>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;
