import React, { useEffect, useState } from 'react';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { createProductFallback, handleImageError } from '../../utils/imageFallback';
import './Gallery.css';

const normalizeDimension = (value) => {
    if (value === undefined || value === null || value === '') return undefined;
    const str = String(value).trim();
    return /^\d+$/.test(str) ? `${str}px` : str;
};

const Gallery = ({
    className = '',
    width,
    height,
    radius = '0px',
    showThumbs = false,
    images = [],
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
    }, [images]);

    const total = images.length;
    const isFirst = currentIndex === 0;
    const isLast = currentIndex >= total - 1;

    const handlePrev = () => {
        if (!isFirst) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (!isLast) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    if (!total) return null;

    return (
        <div
            className={`drip-gallery ${className}`.trim()}
            style={{
                width: normalizeDimension(width),
                maxWidth: '100%',
            }}
        >
            <div
                className="drip-gallery-viewport"
                style={{
                    height: normalizeDimension(height) || '500px',
                    borderRadius: radius,
                }}
            >
                <div
                    className="drip-gallery-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((item, index) => {
                        const fallbackSrc =
                            item.fallback || createProductFallback(`Slide ${index + 1}`);
                        return (
                            <div key={`${item.src}-${index}`} className="drip-gallery-slide">
                                <img
                                    src={item.src || fallbackSrc}
                                    alt={item.alt || `Imagem ${index + 1}`}
                                    style={{ borderRadius: radius }}
                                    onError={handleImageError(fallbackSrc)}
                                />
                            </div>
                        );
                    })}
                </div>

                <button
                    type="button"
                    className="drip-gallery-arrow drip-gallery-arrow--left"
                    onClick={handlePrev}
                    disabled={isFirst}
                    aria-label="Slide anterior"
                >
                    <img src={arrowLeft} alt="Anterior" width={12} height={20} />
                </button>

                <button
                    type="button"
                    className="drip-gallery-arrow drip-gallery-arrow--right"
                    onClick={handleNext}
                    disabled={isLast}
                    aria-label="Próximo slide"
                >
                    <img src={arrowRight} alt="Próximo" width={12} height={20} />
                </button>

                {!showThumbs && total > 1 && (
                    <div className="drip-gallery-dots">
                        {images.map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                type="button"
                                aria-label={`Ir para slide ${index + 1}`}
                                className={`drip-gallery-dot ${currentIndex === index ? 'drip-gallery-dot--active' : ''
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {showThumbs && (
                <div className="drip-gallery-thumbs">
                    {images.map((item, index) => {
                        const isSelected = currentIndex === index;
                        const fallbackSrc =
                            item.fallback || createProductFallback(`Thumb ${index + 1}`);
                        return (
                            <button
                                key={`thumb-${item.src}-${index}`}
                                type="button"
                                className={`drip-gallery-thumb-btn ${isSelected ? 'drip-gallery-thumb-btn--active' : ''
                                    }`}
                                style={{ borderRadius: radius }}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Selecionar imagem ${index + 1}`}
                            >
                                <img
                                    src={item.src || fallbackSrc}
                                    alt={item.alt || `Miniatura ${index + 1}`}
                                    className="drip-gallery-thumb-img"
                                    style={{ borderRadius: radius }}
                                    onError={handleImageError(fallbackSrc)}
                                />
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Gallery;
