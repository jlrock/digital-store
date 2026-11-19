import React from 'react';
import starIcon from '../../assets/star-icon.svg';
import { formatPrice } from '../../utils/formatPrice';
import './BuyBox.css';

const BuyBox = ({
    name,
    reference,
    stars,
    rating,
    price,
    priceDiscount,
    description,
    children,
    onBuy,
}) => {
    const hasDiscount =
        typeof priceDiscount === 'number' && priceDiscount > 0 && priceDiscount < price;

    return (
        <div className="drip-buybox">
            <h1 className="drip-buybox-name">{name}</h1>
            {reference && <span className="drip-buybox-reference">{reference}</span>}

            <div className="drip-buybox-rating-row">
                {stars !== undefined && (
                    <span className="drip-buybox-stars-box">
                        <span>{stars}</span>
                        <img src={starIcon} alt="Estrela" width={14} height={14} />
                    </span>
                )}
                {rating !== undefined && (
                    <span className="drip-buybox-rating-text">({rating} avaliações)</span>
                )}
            </div>

            <div className="drip-buybox-price-row">
                {hasDiscount ? (
                    <>
                        <span className="drip-buybox-price-main">
                            {formatPrice(priceDiscount)}
                        </span>
                        <span className="drip-buybox-price-old">{formatPrice(price)}</span>
                    </>
                ) : (
                    <span className="drip-buybox-price-main">{formatPrice(price)}</span>
                )}
            </div>

            {description && (
                <div>
                    <h2 className="drip-buybox-desc-title">Descrição do produto</h2>
                    <p className="drip-buybox-description">{description}</p>
                </div>
            )}

            {children && <div className="mb-2">{children}</div>}

            <button
                type="button"
                className="drip-buybox-buy-btn"
                onClick={onBuy}
            >
                COMPRAR
            </button>
        </div>
    );
};

export default BuyBox;
