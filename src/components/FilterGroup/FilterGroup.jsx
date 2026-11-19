import React, { useId } from 'react';
import './FilterGroup.css';

const FilterGroup = ({
    title,
    inputType = 'checkbox',
    options = [],
    name,
    selectedValues,
    onChange,
}) => {
    const generatedId = useId();
    const groupName = name || generatedId;

    const isChecked = (optValue) => {
        if (selectedValues === undefined || selectedValues === null) return undefined;
        if (inputType === 'radio') {
            return selectedValues === optValue;
        }
        return Array.isArray(selectedValues) && selectedValues.includes(optValue);
    };

    return (
        <div className="drip-filter-group">
            <h4 className="drip-filter-group-title">{title}</h4>
            <div className="drip-filter-options">
                {options.map((option, index) => {
                    const optValue = option.value ?? option.text;
                    const inputId = `${groupName}-${index}`;
                    const checkedState = isChecked(optValue);

                    return (
                        <label key={inputId} htmlFor={inputId} className="drip-filter-label">
                            <input
                                id={inputId}
                                type={inputType}
                                name={groupName}
                                value={optValue}
                                className="drip-filter-input"
                                {...(checkedState !== undefined ? { checked: checkedState } : {})}
                                onChange={(e) => onChange && onChange(optValue, e.target.checked)}
                            />
                            <span>{option.text}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterGroup;
