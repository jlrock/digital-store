import React, { useEffect, useState } from 'react';
import './ProductOptions.css';

const ProductOptions = ({
    label,
    options = [],
    radius = '4px',
    shape = 'square',
    type = 'text',
    selectedValue,
    onSelect,
}) => {
    const [internalSelected, setInternalSelected] = useState(options[0] ?? null);

    useEffect(() => {
        if (selectedValue === undefined && options.length) {
            setInternalSelected(options[0]);
        }
    }, [options, selectedValue]);

    const activeValue =
        selectedValue !== undefined ? selectedValue : internalSelected;

    const handleSelect = (option) => {
        if (selectedValue === undefined) {
            setInternalSelected(option);
        }
        if (onSelect) {
            onSelect(option);
        }
    };

    return (
        <div className="drip-product-options-group">
            {label && <span className="drip-product-options-label">{label}</span>}

            <div className="drip-product-options-list">
                {options.map((option, index) => {
                    const isSelected = activeValue === option;
                    const isSquare = shape === 'square';
                    const isColor = type === 'color';

                    const style = {
                        ...(isSquare ? { borderRadius: radius } : {}),
                        ...(isColor ? { backgroundColor: option } : {}),
                    };

                    return (
                        <button
                            key={`${option}-${index}`}
                            type="button"
                            onClick={() => handleSelect(option)}
                            aria-label={isColor ? `Cor ${option}` : `Opção ${option}`}
                            aria-pressed={isSelected}
                            style={style}
                            className={[
                                'drip-option-item',
                                isSquare ? 'drip-option-item--square' : 'drip-option-item--circle',
                                isColor ? 'drip-option-item--color' : 'drip-option-item--text',
                                isSelected ? 'drip-option-item--selected' : '',
                            ]
                                .filter(Boolean)
                                .join(' ')}
                        >
                            {!isColor ? option : null}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductOptions;
