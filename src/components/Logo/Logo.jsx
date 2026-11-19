import React from 'react';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

const Logo = ({ variant = 'header', white = false, className = '' }) => {
    const isWhite = white || variant === 'footer';
    const src = isWhite ? logoFooter : logoHeader;

    return (
        <img
            src={src}
            alt="Digital Store"
            width={253}
            height={44}
            className={className}
            style={{
                width: '253px',
                height: '44px',
                maxWidth: '100%',
                objectFit: 'contain',
                display: 'block',
            }}
        />
    );
};

export default Logo;
