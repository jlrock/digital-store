function encodeSvg(svg) {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function createBannerFallback(
    title,
    subtitle,
    accent = "#C92071",
    bg = "#F5F5F5",
) {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="681" viewBox="0 0 1440 681">
        <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${bg}"/>
            <stop offset="100%" stop-color="#ECE8FF"/>
        </linearGradient>
        </defs>
        <rect width="1440" height="681" fill="url(#g)"/>
        <circle cx="1120" cy="340" r="240" fill="#FFFFFF" opacity="0.7"/>
        <circle cx="1290" cy="140" r="9" fill="#F6AA1C" opacity="0.5"/>
        <circle cx="1325" cy="140" r="9" fill="#F6AA1C" opacity="0.5"/>
        <circle cx="1360" cy="140" r="9" fill="#F6AA1C" opacity="0.5"/>
        <circle cx="1290" cy="175" r="9" fill="#F6AA1C" opacity="0.5"/>
        <circle cx="1325" cy="175" r="9" fill="#F6AA1C" opacity="0.5"/>
        <circle cx="1360" cy="175" r="9" fill="#F6AA1C" opacity="0.5"/>
        <text x="100" y="210" fill="#F6AA1C" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700">Melhores ofertas personalizadas</text>
        <text x="100" y="295" fill="#1F1F1F" font-family="Inter, Arial, sans-serif" font-size="64" font-weight="800">${title}</text>
        <text x="100" y="355" fill="#474747" font-family="Inter, Arial, sans-serif" font-size="22">${subtitle}</text>
        <rect x="100" y="405" width="220" height="48" rx="8" fill="${accent}"/>
        <text x="210" y="435" text-anchor="middle" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700">Ver Ofertas</text>
        <g transform="translate(810, 175) rotate(-18 220 150)">
        <path d="M55 215 C95 145, 165 130, 235 160 L375 190 C410 198, 430 225, 425 255 L45 255 C35 240, 42 225, 55 215 Z" fill="#FFFFFF" stroke="#1F1F1F" stroke-width="5"/>
        <path d="M45 255 L425 255 L418 280 L52 280 Z" fill="${accent}"/>
        <path d="M165 150 L215 195 M200 148 L245 192" stroke="${accent}" stroke-width="10" stroke-linecap="round"/>
        </g>
    </svg>
    `;
    return encodeSvg(svg);
}

export function createCollectionFallback(tag, title, bg = "#D8E3F2") {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="405" height="251" viewBox="0 0 405 251">
        <rect width="405" height="251" rx="8" fill="${bg}"/>
        <circle cx="325" cy="145" r="85" fill="#FFFFFF" opacity="0.45"/>
        <rect x="30" y="34" width="96" height="32" rx="16" fill="#E7FF86"/>
        <text x="78" y="55" text-anchor="middle" fill="#474747" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="700">${tag}</text>
        <text x="30" y="110" fill="#1F1F1F" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="700">${title}</text>
        <rect x="30" y="175" width="153" height="48" rx="8" fill="#F5F5F5"/>
        <text x="106" y="205" text-anchor="middle" fill="#C92071" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700">Comprar</text>
        <path d="M245 170 C265 130, 305 125, 345 145 L385 162 L380 192 L240 192 Z" fill="#FFFFFF" stroke="#474747" stroke-width="3"/>
    </svg>
    `;
    return encodeSvg(svg);
}

export function createProductFallback(
    label = "Sneaker",
    accent = "#C92071",
    bg = "#FFFFFF",
    shoeColor = "#2B2B2B",
) {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="584" height="642" viewBox="0 0 584 642">
        <rect width="584" height="642" fill="${bg}"/>
        <ellipse cx="292" cy="430" rx="175" ry="26" fill="#1F1F1F" opacity="0.08"/>
        <g transform="translate(80, 175) rotate(-14 210 150)">
        <path d="M35 190 C70 110, 140 85, 205 125 L355 155 C395 164, 415 192, 410 225 L32 225 C22 212, 26 198, 35 190 Z" fill="${shoeColor}"/>
        <path d="M32 225 L410 225 L402 252 L40 252 Z" fill="#FFFFFF" stroke="#CCCCCC" stroke-width="3"/>
        <path d="M135 110 C150 155, 220 185, 325 170" fill="none" stroke="${accent}" stroke-width="14" stroke-linecap="round"/>
        <path d="M150 96 L185 126 M180 94 L212 124 M210 98 L240 126" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
        </g>
        </g>
        <text x="292" y="545" text-anchor="middle" fill="#8F8F8F" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="600">${label}</text>
    </svg>
    `;
    return encodeSvg(svg);
}

export function handleImageError(fallbackSrc) {
    return (event) => {
        const img = event.currentTarget;
        if (img.dataset.triedAlt !== "true") {
            img.dataset.triedAlt = "true";
            if (img.src.endsWith(".png")) {
                img.src = img.src.replace(/\.png$/, ".jpeg");
                return;
            }
            if (img.src.endsWith(".jpeg")) {
                img.src = img.src.replace(/\.jpeg$/, ".png");
                return;
            }
        }
        if (img.dataset.fallbackApplied !== "true") {
            img.dataset.fallbackApplied = "true";
            img.src = fallbackSrc;
        }
    };
}
