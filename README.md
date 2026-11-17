Abaixo está o projeto **Drip Store (Digital Store)** completo em **React + JavaScript + Bootstrap 5**, estruturado exatamente conforme a documentação oficial (`digitalcollegebr/projeto-digital-store`), o design do Figma e todos os requisitos mínimos obrigatórios.

---

### O que foi implementado e garantido

1. **Estrutura de Pastas Fiel à Documentação**:
   - `src/components/`: `Header`, `Footer` (com `<Informations />`), `Logo`, `Section`, `ProductCard`, `ProductListing`, `Gallery`, `FilterGroup`, `ProductOptions`, `BuyBox`, `ProductDetails` e `SpecialOffer`.
   - `src/pages/`: `Layout.jsx` (conforme requisito da Seção 3), `HomePage`, `ProductListingPage`, `ProductViewPage`, além das abas `CategoriesPage`, `MyOrdersPage` e telas de `LoginPage`, `RegisterPage` e páginas institucionais para que **nenhum link do site fique quebrado**.
   - `src/assets/`: Todos os ícones e logotipos em SVG (`logo-header.svg`, `logo-footer.svg`, `mini-cart.svg`, `star-icon.svg`, `search.svg`, `facebook.svg`, `instagram.svg`, `twitter.svg`, `icons/arrow-left.svg`, `icons/arrow-right.svg`, e ícones das categorias).

2. **Conformidade Total com Todos os Requisitos e Casos Especiais da Documentação**:
   - **Paleta de Cores Exata**: Variáveis CSS mapeando todas as cores da Seção 2 (`#C92071`, `#B5B6F2`, `#991956`, `#EE4266`, `#52CA76`, `#F6AA1C` e toda a escala de cinza `#1F1F1F` até `#FFFFFF`) integradas com **Bootstrap 5** (`container`, `row`, `col-*`, utilitários responsivos, modais e formulários).
   - **Rotas Compatíveis**: A listagem de produtos funciona tanto em `/produtos` (Seção 6) quanto em `/products` (Seção 3.1.2 e 7.4), preservando o estado ativo no `NavLink` e a query string `?filter=...`. A visualização do produto funciona em `/product/:id` (Seção 7) e `/produtos/:id`.
   - **Props Compatíveis**: `<ProductCard />` aceita tanto `image` (Seção 4.3/5.3/6.3/7.4) quanto `imagem` (Seção 4.2); `<Gallery />` aceita `width` numérico ou com `px` (`"1440"` ou `"700px"`).
   - **Interatividade Completa**: Busca funcional via lupa ou `Enter`, filtros reais por Marca, Categoria, Gênero e Estado, ordenação por Menor/Maior preço, carrossel deslizante com setas desabilitadas nas extremidades e miniaturas selecionáveis, seleção de tamanho e cor no `ProductOptions` e fluxo de compra que salva pedidos em `Meus Pedidos` (`localStorage`).
   - **Fallback Inteligente de Imagens (`utils/imageFallback.js`)**: O projeto aponta para os arquivos originais da pasta `public/` (`/home-slide-1.jpeg`, `/collection-1.png`, `/product-thumb-1.png`, `/product-image-1.png`, etc.). Caso você rode o projeto antes de copiar a pasta `public/` do repositório oficial, um fallback automático em SVG renderiza ilustrações estilizadas sem nenhum ícone quebrado!

---

## 1. Estrutura Completa de Arquivos

```text
drip-store/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    ├── assets/
    │   ├── logo-header.svg
    │   ├── logo-footer.svg
    │   ├── mini-cart.svg
    │   ├── search.svg
    │   ├── star-icon.svg
    │   ├── facebook.svg
    │   ├── instagram.svg
    │   ├── twitter.svg
    │   └── icons/
    │       ├── arrow-left.svg
    │       ├── arrow-right.svg
    │       ├── category-tshirt.svg
    │       ├── category-pants.svg
    │       ├── category-cap.svg
    │       ├── category-headphone.svg
    │       └── category-sneakers.svg
    ├── utils/
    │   ├── formatPrice.js
    │   └── imageFallback.js
    ├── data/
    │   └── products.js
    ├── components/
    │   ├── Logo/
    │   ├── Header/
    │   ├── Footer/
    │   ├── Section/
    │   ├── ProductCard/
    │   ├── ProductListing/
    │   ├── Gallery/
    │   ├── FilterGroup/
    │   ├── ProductOptions/
    │   ├── BuyBox/
    │   ├── ProductDetails/
    │   └── SpecialOffer/
    └── pages/
        ├── Layout.jsx
        ├── HomePage/
        ├── ProductListingPage/
        ├── ProductViewPage/
        ├── CategoriesPage/
        ├── MyOrdersPage/
        └── AuthPages/
```

---

## 2. Configuração Base

### `package.json`
```json
{
  "name": "drip-store",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.3.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "vite": "^5.4.10"
  }
}
```

### `vite.config.js`
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### `index.html`
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Drip Store | Digital Store</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### `src/main.jsx`
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/global.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### `src/styles/global.css`
```css
:root {
  /* Brand Colors */
  --primary: #C92071;
  --secondary: #B5B6F2;
  --tertiary: #991956;
  --error: #EE4266;
  --success: #52CA76;
  --warning: #F6AA1C;

  /* Grayscale */
  --dark-gray: #1F1F1F;
  --dark-gray-2: #474747;
  --dark-gray-3: #666666;
  --light-gray: #8F8F8F;
  --light-gray-2: #CCCCCC;
  --light-gray-3: #F5F5F5;
  --white: #FFFFFF;

  /* Typography */
  --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: var(--font-family-base);
  background-color: var(--light-gray-3);
  color: var(--dark-gray-2);
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}

.drip-main-content {
  min-height: calc(100vh - 500px);
  background-color: var(--light-gray-3);
}

.btn-drip-primary {
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--white);
  font-weight: 700;
  border-radius: 4px;
  transition: background-color 0.2s ease, transform 0.15s ease;
}

.btn-drip-primary:hover,
.btn-drip-primary:focus {
  background-color: var(--tertiary);
  border-color: var(--tertiary);
  color: var(--white);
}

.btn-drip-warning {
  background-color: var(--warning);
  border-color: var(--warning);
  color: var(--white);
  font-weight: 700;
  border-radius: 8px;
  transition: filter 0.2s ease, transform 0.15s ease;
}

.btn-drip-warning:hover,
.btn-drip-warning:focus {
  filter: brightness(0.95);
  color: var(--white);
}

.text-drip-primary {
  color: var(--primary) !important;
}
```

### `src/App.jsx`
```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import CategoriesPage from './pages/CategoriesPage';
import MyOrdersPage from './pages/MyOrdersPage';
import { LoginPage, RegisterPage, InfoPage } from './pages/AuthPages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produtos" element={<ProductListingPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/product/:id" element={<ProductViewPage />} />
      <Route path="/produtos/:id" element={<ProductViewPage />} />
      <Route path="/categorias" element={<CategoriesPage />} />
      <Route path="/meus-pedidos" element={<MyOrdersPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route
        path="/about"
        element={<InfoPage title="Sobre Drip Store" subtitle="Conheça nossa história e propósito na moda streetwear e esportiva." />}
      />
      <Route
        path="/security"
        element={<InfoPage title="Segurança" subtitle="Compra protegida com criptografia e garantia de autenticidade." />}
      />
      <Route
        path="/wishlist"
        element={<InfoPage title="Wishlist" subtitle="Salve seus sneakers e peças favoritas para acompanhar promoções." />}
      />
      <Route
        path="/blog"
        element={<InfoPage title="Blog Drip Store" subtitle="Lançamentos, tendências, collabs e guias de estilo." />}
      />
      <Route
        path="/careers"
        element={<InfoPage title="Trabalhe conosco" subtitle="Faça parte do time Digital Store em Fortaleza e remoto." />}
      />
      <Route
        path="*"
        element={<InfoPage title="Página não encontrada" subtitle="A página solicitada não existe. Use o menu acima para voltar às compras." isNotFound />}
      />
    </Routes>
  );
}

export default App;
```

---

## 3. Assets SVG (`src/assets/`)

Crie os seguintes arquivos SVG dentro de `src/assets/` e `src/assets/icons/`:

### `src/assets/logo-header.svg`
```xml
<svg width="253" height="44" viewBox="0 0 253 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="5" width="33" height="33" rx="8" fill="#C92071"/>
  <path d="M9 15L15 21.5L9 28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 28H24" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  <text x="43" y="31" fill="#C92071" font-family="Inter, Arial, sans-serif" font-size="31" font-weight="700" letter-spacing="-0.5">Digital Store</text>
</svg>
```

### `src/assets/logo-footer.svg`
```xml
<svg width="253" height="44" viewBox="0 0 253 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="5" width="33" height="33" rx="8" fill="#FFFFFF"/>
  <path d="M9 15L15 21.5L9 28" stroke="#1F1F1F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 28H24" stroke="#1F1F1F" stroke-width="3" stroke-linecap="round"/>
  <text x="43" y="31" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="31" font-weight="700" letter-spacing="-0.5">Digital Store</text>
</svg>
```

### `src/assets/mini-cart.svg`
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#C92071" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="9" cy="21" r="1.5" fill="#C92071"/>
  <circle cx="20" cy="21" r="1.5" fill="#C92071"/>
</svg>
```

### `src/assets/search.svg`
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="11" cy="11" r="7" stroke="#8F8F8F" stroke-width="2"/>
  <path d="M20 20L16 16" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round"/>
</svg>
```

### `src/assets/star-icon.svg`
```xml
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
```

### `src/assets/facebook.svg`
```xml
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="#FFFFFF"/>
</svg>
```

### `src/assets/instagram.svg`
```xml
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="12" cy="12" r="4" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="17.5" cy="6.5" r="1.25" fill="#FFFFFF"/>
</svg>
```

### `src/assets/twitter.svg`
```xml
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" fill="#FFFFFF"/>
</svg>
```

### `src/assets/icons/arrow-left.svg`
```xml
<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L2 12L12 22" stroke="#474747" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### `src/assets/icons/arrow-right.svg`
```xml
<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 2L12 12L2 22" stroke="#474747" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### `src/assets/icons/category-tshirt.svg`
```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 8L8 13L11 21L15 19V39H33V19L37 21L40 13L32 8C30.2 10.5 27.3 12 24 12C20.7 12 17.8 10.5 16 8Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### `src/assets/icons/category-pants.svg`
```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 8H34L36 40H27L24 23L21 40H12L14 8Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M14 14H34" stroke="currentColor" stroke-width="2"/>
</svg>
```

### `src/assets/icons/category-cap.svg`
```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 27C10 18.7157 16.268 12 24 12C31.732 12 38 18.7157 38 27H10Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M10 27H42C42 30.5 39 32 34 32H12C10.5 32 10 30 10 27Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="24" cy="10" r="2" fill="currentColor"/>
</svg>
```

### `src/assets/icons/category-headphone.svg`
```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 28V24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24V28" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
  <rect x="8" y="25" width="7" height="13" rx="3.5" stroke="currentColor" stroke-width="2.2"/>
  <rect x="33" y="25" width="7" height="13" rx="3.5" stroke="currentColor" stroke-width="2.2"/>
</svg>
```

### `src/assets/icons/category-sneakers.svg`
```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 29L14 17L22 22C25 24 28.5 25 32 25H37C39.2 25 41 26.8 41 29V33H7V30C7 29.6 7.4 29.2 8 29Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M7 33H41V36H7V33Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M18 19L22 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
```

---

## 4. Utilitários e Dados (`src/utils/` e `src/data/`)

### `src/utils/formatPrice.js`
```javascript
export function formatPrice(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return '';
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
```

### `src/utils/imageFallback.js`
Este helper permite utilizar diretamente as imagens da pasta `public/` do repositório oficial (`home-slide-1.jpeg`, `collection-1.png`, `product-thumb-1.png`, `product-image-1.png`, etc.). Caso algum arquivo local ainda não exista na pasta `public/` (ou tenha extensão `.jpeg` em vez de `.png`), ele gera instantaneamente uma imagem SVG estilizada no tema do Figma para que o layout nunca exiba ícones quebrados.

```javascript
function encodeSvg(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function createBannerFallback(title, subtitle, accent = '#C92071', bg = '#F5F5F5') {
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

export function createCollectionFallback(tag, title, bg = '#D8E3F2') {
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

export function createProductFallback(label = 'Sneaker', accent = '#C92071', bg = '#FFFFFF', shoeColor = '#2B2B2B') {
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
      <text x="292" y="545" text-anchor="middle" fill="#8F8F8F" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="600">${label}</text>
    </svg>
  `;
  return encodeSvg(svg);
}

export function handleImageError(fallbackSrc) {
  return (event) => {
    const img = event.currentTarget;
    if (img.dataset.triedAlt !== 'true') {
      img.dataset.triedAlt = 'true';
      if (img.src.endsWith('.png')) {
        img.src = img.src.replace(/\.png$/, '.jpeg');
        return;
      }
      if (img.src.endsWith('.jpeg')) {
        img.src = img.src.replace(/\.jpeg$/, '.png');
        return;
      }
    }
    if (img.dataset.fallbackApplied !== 'true') {
      img.dataset.fallbackApplied = 'true';
      img.src = fallbackSrc;
    }
  };
}
```

### `src/data/products.js`
```javascript
import {
  createBannerFallback,
  createCollectionFallback,
  createProductFallback,
} from '../utils/imageFallback';

export const homeSlides = [
  {
    src: '/home-slide-1.jpeg',
    alt: 'Queima de estoque Nike - Melhores ofertas personalizadas',
    fallback: createBannerFallback(
      'Queima de estoque Nike',
      'Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure.',
      '#C92071',
      '#F5F5F5'
    ),
  },
  {
    src: '/home-slide-2.jpeg',
    alt: 'Nova Coleção K-Swiss V8',
    fallback: createBannerFallback(
      'Coleção K-Swiss V8',
      'Conforto, performance e design urbano para o seu dia a dia.',
      '#C92071',
      '#EEF0FF'
    ),
  },
  {
    src: '/home-slide-3.jpeg',
    alt: 'Tênis Adidas Runfalcon com 30% OFF',
    fallback: createBannerFallback(
      'Lançamentos Adidas',
      'Tecnologia de amortecimento leve com condições imperdíveis.',
      '#C92071',
      '#FFF7EC'
    ),
  },
  {
    src: '/home-slide-4.jpeg',
    alt: 'Streetwear Drip Store 2026',
    fallback: createBannerFallback(
      'Drop Exclusivo Puma',
      'Edições limitadas com entrega expressa para todo o Brasil.',
      '#C92071',
      '#FCEBF3'
    ),
  },
];

export const featuredCollections = [
  {
    id: 'supreme',
    title: 'Novo drop Supreme',
    discount: '30% OFF',
    image: '/collection-1.png',
    categoryLink: '/produtos?categoria=Camisetas',
    fallback: createCollectionFallback('30% OFF', 'Novo drop Supreme', '#D8E3F2'),
  },
  {
    id: 'adidas',
    title: 'Coleção Adidas',
    discount: '30% OFF',
    image: '/collection-2.png',
    categoryLink: '/produtos?marca=Adiddas',
    fallback: createCollectionFallback('30% OFF', 'Coleção Adidas', '#E2E3FF'),
  },
  {
    id: 'beats',
    title: 'Novo Beats Bass',
    discount: '30% OFF',
    image: '/collection-3.png',
    categoryLink: '/produtos?categoria=Headphones',
    fallback: createCollectionFallback('30% OFF', 'Novo Beats Bass', '#EFE7FF'),
  },
];

export const allProducts = [
  {
    id: 1,
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    category: 'Tênis',
    subCategory: 'Corrida',
    brand: 'Nike',
    gender: 'Masculino',
    condition: 'Novo',
    reference: 'Casual | Nike | REF:38416711',
    stars: 4.7,
    rating: 90,
    price: 319,
    priceDiscount: 219,
    image: '/product-thumb-1.png',
    fallback: createProductFallback('Nike Revolution 6', '#C92071', '#FFFFFF', '#242424'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'],
    images: [
      { src: '/product-image-1.png', fallback: createProductFallback('Vista Lateral', '#C92071', '#E2E3FF', '#242424') },
      { src: '/product-image-2.png', fallback: createProductFallback('Vista Frontal', '#C92071', '#FFE8BC', '#242424') },
      { src: '/product-image-3.png', fallback: createProductFallback('Detalhe Solado', '#C92071', '#FFC0CB', '#242424') },
      { src: '/product-image-4.png', fallback: createProductFallback('Vista Superior', '#C92071', '#DEC699', '#242424') },
      { src: '/product-image-5.png', fallback: createProductFallback('Edição Especial', '#C92071', '#E8DFCF', '#242424') },
    ],
  },
  {
    id: 2,
    name: 'K-Swiss V8 - Masculino',
    category: 'Tênis',
    subCategory: 'Casual',
    brand: 'K-Swiss',
    gender: 'Masculino',
    condition: 'Novo',
    reference: 'Casual | K-Swiss | REF:38416712',
    stars: 4.8,
    rating: 128,
    price: 200,
    priceDiscount: 100,
    image: '/product-thumb-2.png',
    fallback: createProductFallback('K-Swiss V8', '#C92071', '#FFFFFF', '#1F1F1F'),
    description:
      'O K-Swiss V8 combina cabedal respirável, palmilha anatômica de alta densidade e solado emborrachado antiderrapante para uso urbano e esportivo.',
    sizes: ['38', '39', '40', '41', '42'],
    colors: ['#1F1F1F', '#FFFFFF', '#C92071', '#3B82F6'],
    images: [
      { src: '/product-image-2.png', fallback: createProductFallback('K-Swiss V8 - 1', '#C92071', '#E2E3FF', '#1F1F1F') },
      { src: '/product-image-1.png', fallback: createProductFallback('K-Swiss V8 - 2', '#C92071', '#FFE8BC', '#1F1F1F') },
      { src: '/product-image-3.png', fallback: createProductFallback('K-Swiss V8 - 3', '#C92071', '#FFC0CB', '#1F1F1F') },
      { src: '/product-image-4.png', fallback: createProductFallback('K-Swiss V8 - 4', '#C92071', '#DEC699', '#1F1F1F') },
    ],
  },
  {
    id: 3,
    name: 'Adiddas Ultraboost Light - Feminino',
    category: 'Tênis',
    subCategory: 'Esporte e lazer',
    brand: 'Adiddas',
    gender: 'Feminino',
    condition: 'Novo',
    reference: 'Esporte | Adiddas | REF:51920384',
    stars: 4.9,
    rating: 76,
    price: 380,
    priceDiscount: 269.9,
    image: '/product-thumb-3.png',
    fallback: createProductFallback('Adiddas Ultraboost', '#C92071', '#FFFFFF', '#6D70B7'),
    description:
      'Retorno de energia incomparável com entressola ultraleve e malha adaptável que acompanha cada passo com máximo conforto.',
    sizes: ['35', '36', '37', '38', '39'],
    colors: ['#6D70B7', '#FF6969', '#1F1F1F'],
    images: [
      { src: '/product-image-3.png', fallback: createProductFallback('Adiddas - 1', '#C92071', '#E2E3FF', '#6D70B7') },
      { src: '/product-image-1.png', fallback: createProductFallback('Adiddas - 2', '#C92071', '#FFE8BC', '#6D70B7') },
      { src: '/product-image-4.png', fallback: createProductFallback('Adiddas - 3', '#C92071', '#FFC0CB', '#6D70B7') },
    ],
  },
  {
    id: 4,
    name: 'Puma RS-X Reinvention - Unisex',
    category: 'Tênis',
    subCategory: 'Casual',
    brand: 'Puma',
    gender: 'Unisex',
    condition: 'Novo',
    reference: 'Casual | Puma | REF:88210344',
    stars: 4.6,
    rating: 64,
    price: 299.9,
    image: '/product-thumb-4.png',
    fallback: createProductFallback('Puma RS-X', '#F6AA1C', '#FFFFFF', '#3A3A3A'),
    description:
      'Silhueta volumosa inspirada nos anos 80 com tecnologia Running System para absorção de impacto superior e presença marcante no visual.',
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: ['#F6AA1C', '#1F1F1F', '#52CA76'],
    images: [
      { src: '/product-image-4.png', fallback: createProductFallback('Puma RS-X - 1', '#F6AA1C', '#E2E3FF', '#3A3A3A') },
      { src: '/product-image-2.png', fallback: createProductFallback('Puma RS-X - 2', '#F6AA1C', '#FFE8BC', '#3A3A3A') },
      { src: '/product-image-5.png', fallback: createProductFallback('Puma RS-X - 3', '#F6AA1C', '#DEC699', '#3A3A3A') },
    ],
  },
  {
    id: 5,
    name: 'Calenciaga Triple Street - Unisex',
    category: 'Tênis',
    subCategory: 'Utilitário',
    brand: 'Calenciaga',
    gender: 'Unisex',
    condition: 'Novo',
    reference: 'Utilitário | Calenciaga | REF:99124501',
    stars: 4.5,
    rating: 42,
    price: 450,
    priceDiscount: 349.9,
    image: '/product-thumb-5.png',
    fallback: createProductFallback('Calenciaga Street', '#C92071', '#FFFFFF', '#474747'),
    description:
      'Construção em camadas com acabamento premium, solado tratorado de três níveis e visual arrojado para produções urbanas.',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: ['#474747', '#C92071', '#B5B6F2'],
    images: [
      { src: '/product-image-5.png', fallback: createProductFallback('Calenciaga - 1', '#C92071', '#E2E3FF', '#474747') },
      { src: '/product-image-1.png', fallback: createProductFallback('Calenciaga - 2', '#C92071', '#FFE8BC', '#474747') },
    ],
  },
  {
    id: 6,
    name: 'Nike Air Max 90 Essential - Masculino',
    category: 'Tênis',
    subCategory: 'Esporte e lazer',
    brand: 'Nike',
    gender: 'Masculino',
    condition: 'Usado',
    reference: 'Esporte | Nike | REF:44019283',
    stars: 4.8,
    rating: 112,
    price: 280,
    priceDiscount: 199.9,
    image: '/product-thumb-1.png',
    fallback: createProductFallback('Nike Air Max 90', '#EE4266', '#FFFFFF', '#1F1F1F'),
    description:
      'Ícone clássico com unidade Air visível no calcanhar, costuras reforçadas e design atemporal.',
    sizes: ['39', '40', '41', '42'],
    colors: ['#EE4266', '#1F1F1F', '#6FEEFF'],
    images: [
      { src: '/product-image-1.png', fallback: createProductFallback('Air Max 90 - 1', '#EE4266', '#FFE8BC', '#1F1F1F') },
      { src: '/product-image-3.png', fallback: createProductFallback('Air Max 90 - 2', '#EE4266', '#E2E3FF', '#1F1F1F') },
    ],
  },
  {
    id: 7,
    name: 'Camiseta Supreme Box Logo Drop',
    category: 'Camisetas',
    subCategory: 'Casual',
    brand: 'Nike',
    gender: 'Unisex',
    condition: 'Novo',
    reference: 'Street | Supreme | REF:77231100',
    stars: 4.9,
    rating: 54,
    price: 189.9,
    priceDiscount: 129.9,
    image: '/product-thumb-2.png',
    fallback: createProductFallback('Camiseta Drop', '#C92071', '#FFFFFF', '#C92071'),
    description:
      'Malha 100% algodão penteado de gramatura encorpada com modelagem relaxed e estampa em silk de alta durabilidade.',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['#1F1F1F', '#C92071', '#CCCCCC'],
    images: [
      { src: '/product-image-2.png', fallback: createProductFallback('Camiseta - 1', '#C92071', '#E2E3FF', '#C92071') },
    ],
  },
  {
    id: 8,
    name: 'Headphone Beats Bass Studio Wireless',
    category: 'Headphones',
    subCategory: 'Utilitário',
    brand: 'Adiddas',
    gender: 'Unisex',
    condition: 'Novo',
    reference: 'Áudio | Beats | REF:66102938',
    stars: 4.7,
    rating: 83,
    price: 520,
    priceDiscount: 399,
    image: '/product-thumb-3.png',
    fallback: createProductFallback('Beats Bass Wireless', '#52CA76', '#FFFFFF', '#1F1F1F'),
    description:
      'Cancelamento ativo de ruído, bateria de até 40 horas e graves profundos com acabamento ergonômico.',
    sizes: ['Único'],
    colors: ['#1F1F1F', '#C92071', '#B5B6F2'],
    images: [
      { src: '/product-image-3.png', fallback: createProductFallback('Beats - 1', '#52CA76', '#E2E3FF', '#1F1F1F') },
    ],
  },
  {
    id: 9,
    name: 'Calça Cargo Utilitária Street',
    category: 'Calças',
    subCategory: 'Utilitário',
    brand: 'Puma',
    gender: 'Masculino',
    condition: 'Novo',
    reference: 'Utilitário | Street | REF:30291847',
    stars: 4.4,
    rating: 31,
    price: 229.9,
    image: '/product-thumb-4.png',
    fallback: createProductFallback('Calça Cargo', '#1F1F1F', '#FFFFFF', '#474747'),
    description:
      'Tecido sarja resistente com bolsos laterais funcionais e ajuste em elástico nos tornozelos.',
    sizes: ['38', '40', '42', '44'],
    colors: ['#1F1F1F', '#666666'],
    images: [
      { src: '/product-image-4.png', fallback: createProductFallback('Calça - 1', '#1F1F1F', '#DEC699', '#474747') },
    ],
  },
  {
    id: 10,
    name: 'Boné K-Swiss Classic Aba Curva',
    category: 'Bonés',
    subCategory: 'Esporte e lazer',
    brand: 'K-Swiss',
    gender: 'Unisex',
    condition: 'Usado',
    reference: 'Acessório | K-Swiss | REF:11223344',
    stars: 4.3,
    rating: 19,
    price: 99.9,
    priceDiscount: 69.9,
    image: '/product-thumb-5.png',
    fallback: createProductFallback('Boné K-Swiss', '#C92071', '#FFFFFF', '#2F2F2F'),
    description:
      'Boné estruturado em algodão com fecho ajustável traseiro e logo bordado em alto relevo.',
    sizes: ['Único'],
    colors: ['#1F1F1F', '#C92071', '#6D70B7'],
    images: [
      { src: '/product-image-5.png', fallback: createProductFallback('Boné - 1', '#C92071', '#FFE8BC', '#2F2F2F') },
    ],
  },
  {
    id: 11,
    name: 'Tênis Nike Pegasus 40 - Feminino',
    category: 'Tênis',
    subCategory: 'Corrida',
    brand: 'Nike',
    gender: 'Feminino',
    condition: 'Novo',
    reference: 'Corrida | Nike | REF:55443322',
    stars: 4.9,
    rating: 145,
    price: 410,
    priceDiscount: 319.9,
    image: '/product-thumb-1.png',
    fallback: createProductFallback('Nike Pegasus 40', '#C92071', '#FFFFFF', '#5E5E5E'),
    description:
      'Amortecimento responsivo ideal para treinos diários e longas distâncias com suporte equilibrado.',
    sizes: ['35', '36', '37', '38', '39'],
    colors: ['#FF6969', '#6FEEFF', '#1F1F1F'],
    images: [
      { src: '/product-image-1.png', fallback: createProductFallback('Pegasus 40 - 1', '#C92071', '#FFC0CB', '#5E5E5E') },
    ],
  },
  {
    id: 12,
    name: 'Tênis Adiddas Forum Low - Unisex',
    category: 'Tênis',
    subCategory: 'Casual',
    brand: 'Adiddas',
    gender: 'Unisex',
    condition: 'Usado',
    reference: 'Casual | Adiddas | REF:90817263',
    stars: 4.6,
    rating: 67,
    price: 249.9,
    image: '/product-thumb-2.png',
    fallback: createProductFallback('Adiddas Forum Low', '#6D70B7', '#FFFFFF', '#333333'),
    description:
      'Estilo clássico das quadras de basquete dos anos 80 com tira ajustável no tornozelo e acabamento em couro.',
    sizes: ['38', '39', '40', '41', '42'],
    colors: ['#6D70B7', '#1F1F1F', '#F6AA1C'],
    images: [
      { src: '/product-image-2.png', fallback: createProductFallback('Forum Low - 1', '#6D70B7', '#E2E3FF', '#333333') },
    ],
  },
];
```

---

## 5. Componentes (`src/components/`)

### `src/components/Logo/Logo.jsx`
```jsx
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
```

### `src/components/Logo/index.js`
```javascript
export { default } from './Logo.jsx';
```

---

### `src/components/Header/Header.css`
```css
.drip-header {
  background-color: var(--white);
  border-bottom: 1px solid #f0f0f0;
  padding-top: 28px;
  padding-bottom: 18px;
}

.drip-search-form {
  position: relative;
  flex: 1;
  max-width: 560px;
}

.drip-search-input {
  width: 100%;
  height: 54px;
  background-color: var(--light-gray-3);
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0 50px 0 20px;
  font-size: 16px;
  color: var(--dark-gray-2);
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.drip-search-input::placeholder {
  color: var(--light-gray);
}

.drip-search-input:focus {
  outline: none;
  background-color: var(--white);
  border-color: var(--primary);
}

.drip-search-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.drip-register-link {
  font-size: 16px;
  color: var(--dark-gray-2);
  text-decoration: underline;
  text-decoration-color: var(--dark-gray-2);
  text-underline-offset: 4px;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.drip-register-link:hover {
  color: var(--primary);
  text-decoration-color: var(--primary);
}

.drip-login-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 40px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.drip-login-btn:hover {
  background-color: var(--tertiary);
  color: var(--white);
}

.drip-cart-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.drip-cart-badge {
  position: absolute;
  top: -7px;
  right: -9px;
  min-width: 17px;
  height: 17px;
  padding: 0 4px;
  border-radius: 50%;
  background-color: var(--error);
  color: var(--white);
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drip-nav-list {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
}

.drip-nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
  font-size: 16px;
  font-weight: 400;
  color: var(--dark-gray-2);
  transition: color 0.2s ease;
}

.drip-nav-link:hover {
  color: var(--primary);
}

.drip-nav-link.active {
  color: var(--primary);
  font-weight: 700;
  border-bottom: 2px solid var(--primary);
}

@media (max-width: 991.98px) {
  .drip-search-form {
    max-width: 100%;
    margin-top: 12px;
  }

  .drip-nav-list {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid #eeeeee;
  }
}
```

### `src/components/Header/Header.jsx`
```jsx
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Logo from '../Logo';
import searchIcon from '../../assets/search.svg';
import miniCartIcon from '../../assets/mini-cart.svg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('filter') || '');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setSearchTerm(searchParams.get('filter') || '');
  }, [searchParams]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/products?filter=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/products');
    }
  };

  const isProductsRoute =
    location.pathname.startsWith('/produtos') || location.pathname.startsWith('/products');

  return (
    <header className="drip-header">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          {/* Botão hamburguer responsivo Bootstrap */}
          <button
            type="button"
            className="navbar-toggler d-lg-none border-0 p-1 bg-transparent"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className="d-block mb-1"
              style={{ width: 24, height: 2.5, backgroundColor: 'var(--dark-gray)' }}
            />
            <span
              className="d-block mb-1"
              style={{ width: 24, height: 2.5, backgroundColor: 'var(--dark-gray)' }}
            />
            <span
              className="d-block"
              style={{ width: 24, height: 2.5, backgroundColor: 'var(--dark-gray)' }}
            />
          </button>

          {/* 3.1.1 Logo */}
          <Link to="/" aria-label="Página inicial Digital Store">
            <Logo variant="header" />
          </Link>

          {/* 3.1.2 Campo de busca (Desktop) */}
          <form
            className="drip-search-form d-none d-lg-block"
            onSubmit={handleSearch}
            role="search"
          >
            <input
              type="text"
              className="drip-search-input"
              placeholder="Pesquisar produto..."
              aria-label="Pesquisar produto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="drip-search-btn"
              aria-label="Buscar produtos"
            >
              <img src={searchIcon} alt="Buscar" width={20} height={20} />
            </button>
          </form>

          {/* 3.1.3 Área de Redirecionamento + 3.1.4 Carrinho */}
          <div className="d-flex align-items-center gap-3 gap-lg-4">
            <div className="d-none d-lg-flex align-items-center gap-4">
              <Link to="/cadastro" className="drip-register-link">
                Cadastre-se
              </Link>
              <Link to="/login" className="drip-login-btn">
                Entrar
              </Link>
            </div>

            {/* 3.1.4 Ícone de carrinho sem ação de clique conforme especificação */}
            <div className="drip-cart-wrapper" aria-label="Carrinho de compras">
              <img src={miniCartIcon} alt="Carrinho" width={24} height={24} />
              <span className="drip-cart-badge">2</span>
            </div>
          </div>
        </div>

        {/* 3.1.2 Campo de busca (Mobile) */}
        <form
          className="drip-search-form d-block d-lg-none"
          onSubmit={handleSearch}
          role="search"
        >
          <input
            type="text"
            className="drip-search-input"
            placeholder="Pesquisar produto..."
            aria-label="Pesquisar produto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="drip-search-btn"
            aria-label="Buscar produtos"
          >
            <img src={searchIcon} alt="Buscar" width={20} height={20} />
          </button>
        </form>

        {/* 3.1.5 Navegação Principal */}
        <nav
          aria-label="Navegação principal"
          className={`${menuOpen ? 'd-block' : 'd-none'} d-lg-block`}
        >
          <ul className="drip-nav-list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `drip-nav-link ${isActive ? 'active' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/produtos"
                className={({ isActive }) =>
                  `drip-nav-link ${isActive || isProductsRoute ? 'active' : ''}`
                }
              >
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias"
                className={({ isActive }) =>
                  `drip-nav-link ${isActive ? 'active' : ''}`
                }
              >
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meus-pedidos"
                className={({ isActive }) =>
                  `drip-nav-link ${isActive ? 'active' : ''}`
                }
              >
                Meus Pedidos
              </NavLink>
            </li>

            {/* Ações de login/cadastro no menu mobile */}
            <li className="d-flex d-lg-none align-items-center gap-4 pt-2 w-100">
              <Link to="/login" className="drip-login-btn">
                Entrar
              </Link>
              <Link to="/cadastro" className="drip-register-link">
                Cadastre-se
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```

### `src/components/Header/index.js`
```javascript
export { default } from './Header.jsx';
```

---

### `src/components/Footer/Footer.css`
```css
.drip-footer {
  background-color: var(--dark-gray);
  color: var(--white);
  padding-top: 72px;
  padding-bottom: 24px;
}

.drip-footer-description {
  font-size: 16px;
  line-height: 1.625;
  color: var(--white);
  margin-top: 28px;
  margin-bottom: 34px;
  max-width: 307px;
  opacity: 0.92;
}

.drip-footer-socials {
  display: flex;
  align-items: center;
  gap: 32px;
}

.drip-footer-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.drip-footer-social-link:hover {
  opacity: 0.75;
  transform: translateY(-2px);
}

.drip-footer-info-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 24px;
}

.drip-footer-info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.drip-footer-info-link {
  font-size: 16px;
  line-height: 1.6;
  color: var(--white);
  opacity: 0.88;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.drip-footer-info-link:hover {
  color: var(--primary);
  opacity: 1;
}

.drip-footer-divider {
  border-color: rgba(255, 255, 255, 0.3);
  margin-top: 48px;
  margin-bottom: 22px;
  opacity: 1;
}

.drip-footer-copyright {
  font-size: 13px;
  color: var(--white);
  opacity: 0.85;
  text-align: center;
  margin: 0;
}
```

### `src/components/Footer/Informations.jsx`
```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Informations = ({ title, informations = [] }) => {
  return (
    <div>
      <h3 className="drip-footer-info-title">{title}</h3>
      <ul className="drip-footer-info-list">
        {informations.map((item, index) => {
          const isExternalOrProtocol =
            item.link?.startsWith('http') ||
            item.link?.startsWith('tel:') ||
            item.link?.startsWith('mailto:') ||
            item.link?.startsWith('#');

          return (
            <li key={`${item.text}-${index}`}>
              {isExternalOrProtocol ? (
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="drip-footer-info-link"
                >
                  {item.text}
                </a>
              ) : (
                <Link to={item.link || '/'} className="drip-footer-info-link">
                  {item.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Informations;
```

### `src/components/Footer/Footer.jsx`
```jsx
import React from 'react';
import Logo from '../Logo';
import Informations from './Informations.jsx';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import './Footer.css';

const aboutInformations = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/careers' },
  { text: 'Meus Pedidos', link: '/meus-pedidos' },
];

const categoryInformations = [
  { text: 'Camisetas', link: '/produtos?categoria=Camisetas' },
  { text: 'Calças', link: '/produtos?categoria=Calças' },
  { text: 'Bonés', link: '/produtos?categoria=Bonés' },
  { text: 'Headphones', link: '/produtos?categoria=Headphones' },
  { text: 'Tênis', link: '/produtos?categoria=Tênis' },
];

const contactInformations = [
  {
    text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
    link: 'https://maps.google.com/?q=Av.+Santos+Dumont+1510+Fortaleza+CE',
  },
  {
    text: '(85) 3051-3411',
    link: 'tel:+558530513411',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="drip-footer">
      <div className="container">
        <div className="row gy-5 justify-content-between">
          <div className="col-12 col-lg-4">
            <Logo variant="footer" />
            <p className="drip-footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
            <div className="drip-footer-socials">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="drip-footer-social-link"
                aria-label="Facebook"
              >
                <img src={facebookIcon} alt="Facebook" width={20} height={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="drip-footer-social-link"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" width={20} height={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="drip-footer-social-link"
                aria-label="Twitter"
              >
                <img src={twitterIcon} alt="Twitter" width={20} height={20} />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <Informations title="Informação" informations={aboutInformations} />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <Informations title="Categorias" informations={categoryInformations} />
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <Informations title="Contato" informations={contactInformations} />
          </div>
        </div>

        <hr className="drip-footer-divider" />
        <p className="drip-footer-copyright">© {currentYear} Digital Store</p>
      </div>
    </footer>
  );
};

export default Footer;
```

### `src/components/Footer/index.js`
```javascript
export { default } from './Footer.jsx';
export { default as Informations } from './Informations.jsx';
```

---

### `src/components/Section/Section.css`
```css
.drip-section {
  width: 100%;
}

.drip-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.drip-section-header--center {
  justify-content: center;
  position: relative;
}

.drip-section-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin: 0;
}

.drip-section-header--center .drip-section-title {
  text-align: center;
}

.drip-section-link {
  font-size: 18px;
  font-weight: 400;
  color: var(--primary);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: color 0.2s ease, gap 0.2s ease;
}

.drip-section-link:hover {
  color: var(--tertiary);
  gap: 12px;
}

@media (max-width: 575.98px) {
  .drip-section-title {
    font-size: 20px;
  }

  .drip-section-link {
    font-size: 15px;
  }
}
```

### `src/components/Section/Section.jsx`
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const Section = ({
  title,
  titleAlign = 'left',
  link,
  children,
  className = '',
}) => {
  const isCentered = titleAlign === 'center';
  const isExternalLink = link?.href?.startsWith('http');

  return (
    <section className={`drip-section ${className}`}>
      {title && (
        <div
          className={`drip-section-header ${
            isCentered ? 'drip-section-header--center' : ''
          }`}
        >
          <h2 className="drip-section-title">{title}</h2>

          {link?.text && link?.href && (
            isExternalLink ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="drip-section-link"
              >
                <span>{link.text}</span>
                <span aria-hidden="true">→</span>
              </a>
            ) : (
              <Link to={link.href} className="drip-section-link">
                <span>{link.text}</span>
                <span aria-hidden="true">→</span>
              </Link>
            )
          )}
        </div>
      )}

      <div>{children}</div>
    </section>
  );
};

export default Section;
```

### `src/components/Section/index.js`
```javascript
export { default } from './Section.jsx';
```

---

### `src/components/ProductCard/ProductCard.css`
```css
.drip-product-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 292px;
  margin: 0 auto;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
}

.drip-product-card:hover {
  transform: translateY(-4px);
}

.drip-product-card-img-box {
  position: relative;
  width: 100%;
  max-width: 292px;
  height: 321px;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 18px;
}

.drip-product-card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.25s ease;
}

.drip-product-card:hover .drip-product-card-img {
  transform: scale(1.04);
}

.drip-product-discount-badge {
  position: absolute;
  top: 18px;
  left: 18px;
  background-color: #E7FF86;
  color: var(--dark-gray-2);
  font-size: 14px;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 29px;
  z-index: 1;
}

.drip-product-category {
  font-size: 12px;
  font-weight: 700;
  color: var(--light-gray);
  margin-top: 14px;
  margin-bottom: 4px;
}

.drip-product-name {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.35;
  color: var(--dark-gray-2);
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.drip-product-prices {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.drip-product-price {
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray);
}

.drip-product-price--old {
  font-size: 24px;
  font-weight: 400;
  color: var(--light-gray);
  text-decoration: line-through;
}

.drip-product-price--discount {
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray);
}

@media (max-width: 575.98px) {
  .drip-product-card-img-box {
    height: 240px;
  }

  .drip-product-price,
  .drip-product-price--old,
  .drip-product-price--discount {
    font-size: 20px;
  }
}
```

### `src/components/ProductCard/ProductCard.jsx`
```jsx
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
```

### `src/components/ProductCard/index.js`
```javascript
export { default } from './ProductCard.jsx';
```

---

### `src/components/ProductListing/ProductListing.css`
```css
.drip-product-listing-empty {
  background-color: var(--white);
  border-radius: 4px;
  padding: 48px 24px;
  text-align: center;
  color: var(--dark-gray-3);
}
```

### `src/components/ProductListing/ProductListing.jsx`
```jsx
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
```

### `src/components/ProductListing/index.js`
```javascript
export { default } from './ProductListing.jsx';
```

---

### `src/components/Gallery/Gallery.css`
```css
.drip-gallery {
  margin: 0 auto;
  max-width: 100%;
}

.drip-gallery-viewport {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #E2E3FF;
}

.drip-gallery-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.drip-gallery-slide {
  min-width: 100%;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.drip-gallery-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.drip-gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.72);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

.drip-gallery-arrow:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.96);
}

.drip-gallery-arrow:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.drip-gallery-arrow--left {
  left: 18px;
}

.drip-gallery-arrow--right {
  right: 18px;
}

.drip-gallery-dots {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
}

.drip-gallery-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: var(--light-gray-2);
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.drip-gallery-dot--active {
  background-color: var(--primary);
  transform: scale(1.1);
}

.drip-gallery-thumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
}

.drip-gallery-thumb-btn {
  width: 117px;
  height: 95px;
  padding: 0;
  border: 2px solid transparent;
  background-color: #E2E3FF;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.15s ease;
}

.drip-gallery-thumb-btn:hover {
  transform: translateY(-2px);
}

.drip-gallery-thumb-btn--active {
  border: 2px solid var(--primary);
}

.drip-gallery-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 767.98px) {
  .drip-gallery-viewport {
    height: 280px !important;
  }

  .drip-gallery-thumb-btn {
    width: 78px;
    height: 64px;
  }
}
```

### `src/components/Gallery/Gallery.jsx`
```jsx
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
                className={`drip-gallery-dot ${
                  currentIndex === index ? 'drip-gallery-dot--active' : ''
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
                className={`drip-gallery-thumb-btn ${
                  isSelected ? 'drip-gallery-thumb-btn--active' : ''
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
```

### `src/components/Gallery/index.js`
```javascript
export { default } from './Gallery.jsx';
```

---

### `src/components/FilterGroup/FilterGroup.css`
```css
.drip-filter-group {
  margin-bottom: 20px;
}

.drip-filter-group-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin-bottom: 12px;
}

.drip-filter-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.drip-filter-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--dark-gray-2);
  cursor: pointer;
  user-select: none;
}

.drip-filter-input {
  appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  min-width: 22px;
  border: 1px solid var(--light-gray);
  background-color: var(--white);
  cursor: pointer;
  display: grid;
  place-content: center;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.drip-filter-input[type='checkbox'] {
  border-radius: 2px;
}

.drip-filter-input[type='radio'] {
  border-radius: 50%;
}

.drip-filter-input[type='checkbox']:checked {
  background-color: var(--primary);
  border-color: var(--primary);
}

.drip-filter-input[type='checkbox']:checked::before {
  content: '';
  width: 11px;
  height: 6px;
  border-left: 2.2px solid var(--white);
  border-bottom: 2.2px solid var(--white);
  transform: rotate(-45deg) translate(1px, -1px);
}

.drip-filter-input[type='radio']:checked {
  border-color: var(--primary);
}

.drip-filter-input[type='radio']:checked::before {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--primary);
}
```

### `src/components/FilterGroup/FilterGroup.jsx`
```jsx
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
```

### `src/components/FilterGroup/index.js`
```javascript
export { default } from './FilterGroup.jsx';
```

---

### `src/components/ProductOptions/ProductOptions.css`
```css
.drip-product-options-group {
  margin-bottom: 20px;
}

.drip-product-options-label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: var(--light-gray);
  margin-bottom: 10px;
}

.drip-product-options-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.drip-option-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--white);
  padding: 0;
  transition: transform 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
}

.drip-option-item--square {
  width: auto;
  min-width: 46px;
  height: 46px;
  padding: 0 12px;
  border: 1px solid var(--light-gray-2);
}

.drip-option-item--circle {
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: 1px solid var(--light-gray-2);
}

.drip-option-item--text {
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray-2);
}

.drip-option-item--selected {
  border: 2px solid var(--primary) !important;
}

.drip-option-item--text.drip-option-item--selected {
  background-color: var(--primary);
  color: var(--white);
}

.drip-option-item--color.drip-option-item--selected {
  box-shadow: inset 0 0 0 2px var(--white);
}
```

### `src/components/ProductOptions/ProductOptions.jsx`
```jsx
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
```

### `src/components/ProductOptions/index.js`
```javascript
export { default } from './ProductOptions.jsx';
```

---

### `src/components/BuyBox/BuyBox.css`
```css
.drip-buybox {
  display: flex;
  flex-direction: column;
}

.drip-buybox-name {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.18;
  color: var(--dark-gray);
  margin: 0 0 10px;
}

.drip-buybox-reference {
  font-size: 12px;
  font-weight: 500;
  color: var(--dark-gray-3);
  margin-bottom: 14px;
}

.drip-buybox-rating-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.drip-buybox-stars-box {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background-color: var(--warning);
  color: var(--white);
  font-size: 14px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
}

.drip-buybox-rating-text {
  font-size: 14px;
  color: var(--light-gray);
}

.drip-buybox-price-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 22px;
}

.drip-buybox-price-main {
  font-size: 32px;
  font-weight: 700;
  color: var(--dark-gray-2);
}

.drip-buybox-price-old {
  font-size: 16px;
  font-weight: 400;
  color: var(--light-gray-2);
  text-decoration: line-through;
}

.drip-buybox-desc-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--light-gray);
  margin-bottom: 6px;
}

.drip-buybox-description {
  font-size: 14px;
  line-height: 1.57;
  color: var(--dark-gray-2);
  margin-bottom: 24px;
}

.drip-buybox-buy-btn {
  width: 220px;
  max-width: 100%;
  height: 48px;
  background-color: var(--warning);
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
  transition: filter 0.2s ease, transform 0.15s ease;
}

.drip-buybox-buy-btn:hover {
  filter: brightness(0.95);
  transform: translateY(-1px);
}
```

### `src/components/BuyBox/BuyBox.jsx`
```jsx
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
```

### `src/components/BuyBox/index.js`
```javascript
export { default } from './BuyBox.jsx';
```

---

### `src/components/ProductDetails/ProductDetails.css`
```css
.drip-breadcrumb {
  font-size: 14px;
  color: var(--dark-gray-2);
  margin-bottom: 28px;
}

.drip-breadcrumb a {
  color: var(--dark-gray-2);
}

.drip-breadcrumb a:hover {
  color: var(--primary);
}
```

### `src/components/ProductDetails/ProductDetails.jsx`
```jsx
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
```

### `src/components/ProductDetails/index.js`
```javascript
export { default } from './ProductDetails.jsx';
```

---

### `src/components/SpecialOffer/SpecialOffer.css`
```css
.drip-special-offer {
  background-color: var(--white);
  padding: 80px 0;
}

.drip-special-offer-circle {
  width: 100%;
  max-width: 440px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(66, 0, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 24px;
}

.drip-special-offer-eyebrow {
  font-size: 14px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 12px;
  display: block;
}

.drip-special-offer-title {
  font-size: 46px;
  font-weight: 700;
  line-height: 1.12;
  color: var(--dark-gray-2);
  margin-bottom: 20px;
}

.drip-special-offer-text {
  font-size: 16px;
  line-height: 1.75;
  color: var(--dark-gray-2);
  margin-bottom: 28px;
}

@media (max-width: 767.98px) {
  .drip-special-offer {
    padding: 48px 0;
  }

  .drip-special-offer-title {
    font-size: 32px;
  }
}
```

### `src/components/SpecialOffer/SpecialOffer.jsx`
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { createProductFallback, handleImageError } from '../../utils/imageFallback';
import './SpecialOffer.css';

const SpecialOffer = () => {
  const fallbackImg = createProductFallback(
    'Air Jordan Collector',
    '#F6AA1C',
    'transparent',
    '#1F1F1F'
  );

  return (
    <section className="drip-special-offer">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <div className="drip-special-offer-circle">
              <img
                src="/product-image-1.png"
                alt="Air Jordan edição de colecionador"
                className="img-fluid"
                style={{ maxHeight: '320px', objectFit: 'contain' }}
                onError={handleImageError(fallbackImg)}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <span className="drip-special-offer-eyebrow">Oferta especial</span>
            <h2 className="drip-special-offer-title">
              Air Jordan edição de colecionador
            </h2>
            <p className="drip-special-offer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <Link
              to="/product/1"
              className="btn btn-drip-primary d-inline-flex align-items-center justify-content-center"
              style={{ width: '200px', height: '42px', fontSize: '14px' }}
            >
              Ver Oferta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
```

### `src/components/SpecialOffer/index.js`
```javascript
export { default } from './SpecialOffer.jsx';
```

---

## 6. Páginas (`src/pages/`)

### `src/pages/Layout.jsx`
```jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="drip-main-content flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
```

---

### `src/pages/HomePage/HomePage.css`
```css
.drip-home-collections-img {
  width: 100%;
  height: 251px;
  object-fit: cover;
  border-radius: 4px;
  display: block;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.drip-collection-link:hover .drip-home-collections-img {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.drip-category-circle {
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background-color: var(--white);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-gray);
  transition: color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.drip-category-item:hover .drip-category-circle {
  color: var(--primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(201, 32, 113, 0.14);
}

.drip-category-label {
  font-size: 14px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin-top: 12px;
}
```

### `src/pages/HomePage/HomePage.jsx`
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import SpecialOffer from '../../components/SpecialOffer';
import {
  allProducts,
  featuredCollections,
  homeSlides,
} from '../../data/products';
import { handleImageError } from '../../utils/imageFallback';
import tshirtIcon from '../../assets/icons/category-tshirt.svg';
import pantsIcon from '../../assets/icons/category-pants.svg';
import capIcon from '../../assets/icons/category-cap.svg';
import headphoneIcon from '../../assets/icons/category-headphone.svg';
import sneakersIcon from '../../assets/icons/category-sneakers.svg';
import './HomePage.css';

const categoryShortcutItems = [
  { label: 'Camisetas', icon: tshirtIcon },
  { label: 'Calças', icon: pantsIcon },
  { label: 'Bonés', icon: capIcon },
  { label: 'Headphones', icon: headphoneIcon },
  { label: 'Tênis', icon: sneakersIcon },
];

const HomePage = () => {
  const trendingProducts = allProducts.slice(0, 8);

  return (
    <Layout>
      {/* 5.1 Slide de imagens */}
      <Gallery width="1440px" height="681px" images={homeSlides} />

      {/* 5.2 Coleções em destaque */}
      <div className="container py-5">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="row g-4">
            {featuredCollections.map((collection) => (
              <div key={collection.id} className="col-12 col-md-4">
                <Link
                  to={collection.categoryLink}
                  className="drip-collection-link d-block"
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="drip-home-collections-img"
                    style={{ borderRadius: '4px' }}
                    onError={handleImageError(collection.fallback)}
                  />
                </Link>
              </div>
            ))}
          </div>
        </Section>

        {/* Ícones de categorias em destaque (Fidelidade ao Figma) */}
        <div className="mt-5 pt-3">
          <Section title="Coleções em destaque" titleAlign="center">
            <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 mt-3">
              {categoryShortcutItems.map((cat) => (
                <Link
                  key={cat.label}
                  to={`/produtos?categoria=${encodeURIComponent(cat.label)}`}
                  className="drip-category-item d-flex flex-column align-items-center text-decoration-none"
                >
                  <div className="drip-category-circle">
                    <img src={cat.icon} alt={cat.label} width={48} height={48} />
                  </div>
                  <span className="drip-category-label">{cat.label}</span>
                </Link>
              ))}
            </div>
          </Section>
        </div>

        {/* 5.3 Produtos em alta (8 produtos) */}
        <div className="mt-5 pt-4 pb-3">
          <Section
            title="Produtos em alta"
            titleAlign="left"
            link={{ text: 'Ver todos', href: '/produtos' }}
          >
            <ProductListing products={trendingProducts} columns={4} />
          </Section>
        </div>
      </div>

      {/* Oferta especial do Figma */}
      <SpecialOffer />
    </Layout>
  );
};

export default HomePage;
```

### `src/pages/HomePage/index.js`
```javascript
export { default } from './HomePage.jsx';
```

---

### `src/pages/ProductListingPage/ProductListingPage.css`
```css
.drip-sort-wrapper {
  width: 308px;
  max-width: 100%;
  margin-bottom: 20px;
}

.drip-sort-label {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin-bottom: 8px;
}

.drip-sort-select {
  width: 308px;
  max-width: 100%;
  height: 60px;
  border: 1px solid var(--dark-gray-2);
  border-radius: 4px;
  background-color: transparent;
  padding: 0 16px;
  font-size: 16px;
  color: var(--dark-gray-2);
  cursor: pointer;
}

.drip-filter-panel {
  width: 308px;
  max-width: 100%;
  background-color: var(--white);
  border-radius: 4px;
  padding: 30px;
}

.drip-filter-panel-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin: 0;
}

.drip-filter-panel-divider {
  border-top: 1px solid var(--light-gray-2);
  opacity: 1;
  margin: 18px 0 20px;
}

@media (max-width: 991.98px) {
  .drip-sort-wrapper,
  .drip-sort-select,
  .drip-filter-panel {
    width: 100%;
  }
}
```

### `src/pages/ProductListingPage/ProductListingPage.jsx`
```jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout.jsx';
import FilterGroup from '../../components/FilterGroup';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import { allProducts } from '../../data/products';
import './ProductListingPage.css';

const brandOptions = [
  { text: 'Adiddas', value: 'Adiddas' },
  { text: 'Calenciaga', value: 'Calenciaga' },
  { text: 'K-Swiss', value: 'K-Swiss' },
  { text: 'Nike', value: 'Nike' },
  { text: 'Puma', value: 'Puma' },
];

const categoryOptions = [
  { text: 'Esporte e lazer', value: 'Esporte e lazer' },
  { text: 'Casual', value: 'Casual' },
  { text: 'Utilitário', value: 'Utilitário' },
  { text: 'Corrida', value: 'Corrida' },
];

const genderOptions = [
  { text: 'Masculino', value: 'Masculino' },
  { text: 'Feminino', value: 'Feminino' },
  { text: 'Unisex', value: 'Unisex' },
];

const conditionOptions = [
  { text: 'Novo', value: 'Novo' },
  { text: 'Usado', value: 'Usado' },
];

const ProductListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('filter') || '';
  const urlCategory = searchParams.get('categoria') || '';
  const urlBrand = searchParams.get('marca') || '';

  const [sortOrder, setSortOrder] = useState('');
  const [selectedBrands, setSelectedBrands] = useState(
    urlBrand ? [urlBrand] : []
  );
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState('');

  useEffect(() => {
    if (urlBrand) {
      setSelectedBrands([urlBrand]);
    }
  }, [urlBrand]);

  const toggleMultiOption = (setter) => (value, checked) => {
    setter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleClearFilters = () => {
    setSortOrder('');
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedGenders([]);
    setSelectedCondition('');
    setSearchParams({});
  };

  const hasActiveFilters = Boolean(
    searchQuery ||
      urlCategory ||
      selectedBrands.length ||
      selectedCategories.length ||
      selectedGenders.length ||
      selectedCondition
  );

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    const filtered = allProducts.filter((product) => {
      if (normalizedSearch) {
        const haystack = [
          product.name,
          product.category,
          product.subCategory,
          product.brand,
          product.description,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(normalizedSearch)) return false;
      }

      if (urlCategory && product.category.toLowerCase() !== urlCategory.toLowerCase()) {
        return false;
      }

      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.subCategory)
      ) {
        return false;
      }

      if (selectedGenders.length > 0 && !selectedGenders.includes(product.gender)) {
        return false;
      }

      if (selectedCondition && product.condition !== selectedCondition) {
        return false;
      }

      return true;
    });

    if (sortOrder === 'asc') {
      return [...filtered].sort(
        (a, b) => (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price)
      );
    }

    if (sortOrder === 'desc') {
      return [...filtered].sort(
        (a, b) => (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price)
      );
    }

    return filtered;
  }, [
    searchQuery,
    urlCategory,
    selectedBrands,
    selectedCategories,
    selectedGenders,
    selectedCondition,
    sortOrder,
  ]);

  const sectionTitle = searchQuery
    ? `Resultados para "${searchQuery}" - ${filteredProducts.length} ${
        filteredProducts.length === 1 ? 'produto' : 'produtos'
      }`
    : urlCategory
    ? `${urlCategory} - ${filteredProducts.length} ${
        filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'
      }`
    : `${filteredProducts.length} ${
        filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'
      }`;

  return (
    <Layout>
      <div className="container py-5">
        <div className="d-flex flex-column flex-lg-row gap-4 align-items-start">
          {/* Lateral esquerda: Ordenação + Filtros */}
          <aside className="flex-shrink-0 w-100" style={{ maxWidth: '308px' }}>
            {/* 6.1 Ordenar por */}
            <div className="drip-sort-wrapper">
              <label htmlFor="sort-products" className="drip-sort-label">
                Ordenar por
              </label>
              <select
                id="sort-products"
                className="drip-sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Mais relevantes</option>
                <option value="asc">Menor preço</option>
                <option value="desc">Maior preço</option>
              </select>
            </div>

            {/* 6.2 Filtrar por */}
            <div className="drip-filter-panel">
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="drip-filter-panel-title">Filtrar por</h3>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="btn btn-link p-0 text-decoration-underline"
                    style={{ fontSize: '12px', color: 'var(--primary)' }}
                  >
                    Limpar
                  </button>
                )}
              </div>

              <hr className="drip-filter-panel-divider" />

              <FilterGroup
                title="Marca"
                inputType="checkbox"
                name="brand"
                options={brandOptions}
                selectedValues={selectedBrands}
                onChange={toggleMultiOption(setSelectedBrands)}
              />

              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                name="category"
                options={categoryOptions}
                selectedValues={selectedCategories}
                onChange={toggleMultiOption(setSelectedCategories)}
              />

              <FilterGroup
                title="Gênero"
                inputType="checkbox"
                name="gender"
                options={genderOptions}
                selectedValues={selectedGenders}
                onChange={toggleMultiOption(setSelectedGenders)}
              />

              <FilterGroup
                title="Estado"
                inputType="radio"
                name="condition"
                options={conditionOptions}
                selectedValues={selectedCondition}
                onChange={(val) => setSelectedCondition(val)}
              />
            </div>
          </aside>

          {/* 6.3 Listagem de produtos */}
          <div className="flex-grow-1 w-100">
            <Section title={sectionTitle} titleAlign="left">
              <ProductListing products={filteredProducts} columns={3} />
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
```

### `src/pages/ProductListingPage/index.js`
```javascript
export { default } from './ProductListingPage.jsx';
```

---

### `src/pages/ProductViewPage/ProductViewPage.jsx`
```jsx
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
```

### `src/pages/ProductViewPage/index.js`
```javascript
export { default } from './ProductViewPage.jsx';
```

---

### `src/pages/CategoriesPage/CategoriesPage.jsx`
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Section from '../../components/Section';
import { allProducts } from '../../data/products';
import tshirtIcon from '../../assets/icons/category-tshirt.svg';
import pantsIcon from '../../assets/icons/category-pants.svg';
import capIcon from '../../assets/icons/category-cap.svg';
import headphoneIcon from '../../assets/icons/category-headphone.svg';
import sneakersIcon from '../../assets/icons/category-sneakers.svg';

const categoriesData = [
  { name: 'Tênis', description: 'Modelos para corrida, treino e streetwear', icon: sneakersIcon },
  { name: 'Camisetas', description: 'Drops exclusivos e malhas premium', icon: tshirtIcon },
  { name: 'Calças', description: 'Cargo, jogger e peças utilitárias', icon: pantsIcon },
  { name: 'Bonés', description: 'Aba curva, trucker e clássicos', icon: capIcon },
  { name: 'Headphones', description: 'Qualidade sonora e estilo urbano', icon: headphoneIcon },
];

const CategoriesPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <Section title="Todas as Categorias" titleAlign="left">
          <div className="row g-4">
            {categoriesData.map((category) => {
              const count = allProducts.filter(
                (p) => p.category.toLowerCase() === category.name.toLowerCase()
              ).length;

              return (
                <div key={category.name} className="col-12 col-sm-6 col-lg-4">
                  <Link
                    to={`/produtos?categoria=${encodeURIComponent(category.name)}`}
                    className="card h-100 border-0 shadow-sm text-decoration-none p-4"
                    style={{ borderRadius: '8px', backgroundColor: 'var(--white)' }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: 64,
                          height: 64,
                          backgroundColor: 'var(--light-gray-3)',
                          color: 'var(--primary)',
                        }}
                      >
                        <img src={category.icon} alt={category.name} width={34} height={34} />
                      </div>
                      <div>
                        <h3 className="h5 fw-bold mb-1" style={{ color: 'var(--dark-gray)' }}>
                          {category.name}
                        </h3>
                        <span style={{ fontSize: '13px', color: 'var(--primary)' }}>
                          {count} {count === 1 ? 'produto' : 'produtos'}
                        </span>
                      </div>
                    </div>
                    <p className="mb-0" style={{ fontSize: '14px', color: 'var(--dark-gray-3)' }}>
                      {category.description}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
```

### `src/pages/CategoriesPage/index.js`
```javascript
export { default } from './CategoriesPage.jsx';
```

---

### `src/pages/MyOrdersPage/MyOrdersPage.jsx`
```jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Section from '../../components/Section';
import { allProducts } from '../../data/products';
import { formatPrice } from '../../utils/formatPrice';
import { handleImageError } from '../../utils/imageFallback';

const defaultOrders = [
  {
    orderNumber: '#DS-223498',
    productId: allProducts[0].id,
    productName: allProducts[0].name,
    image: allProducts[0].image,
    fallback: allProducts[0].fallback,
    size: '41',
    color: '#6FEEFF',
    price: allProducts[0].priceDiscount,
    status: 'Produto em trânsito',
    date: '16/11/2026',
  },
];

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('drip_store_orders') || '[]');
    setOrders(saved.length > 0 ? saved : defaultOrders);
  }, []);

  return (
    <Layout>
      <div className="container py-5">
        <Section
          title="Meus Pedidos"
          titleAlign="left"
          link={{ text: 'Continuar comprando', href: '/produtos' }}
        >
          <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '4px' }}>
            {orders.map((order, idx) => (
              <div
                key={`${order.orderNumber}-${idx}`}
                className={`d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 py-3 ${
                  idx < orders.length - 1 ? 'border-bottom' : ''
                }`}
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={order.image || order.fallback}
                    alt={order.productName}
                    width={72}
                    height={72}
                    className="rounded p-1"
                    style={{ backgroundColor: '#E2E3FF', objectFit: 'contain' }}
                    onError={handleImageError(order.fallback)}
                  />
                  <div>
                    <span className="d-block" style={{ fontSize: '12px', color: 'var(--light-gray)' }}>
                      Pedido {order.orderNumber} • {order.date}
                    </span>
                    <Link
                      to={`/product/${order.productId}`}
                      className="fw-bold d-block"
                      style={{ color: 'var(--dark-gray)', fontSize: '16px' }}
                    >
                      {order.productName}
                    </Link>
                    <span style={{ fontSize: '13px', color: 'var(--dark-gray-3)' }}>
                      Tamanho: {order.size || 'Padrão'} • Total: {formatPrice(order.price)}
                    </span>
                  </div>
                </div>

                <span
                  className="fw-bold"
                  style={{ fontSize: '14px', color: 'var(--warning)' }}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default MyOrdersPage;
```

### `src/pages/MyOrdersPage/index.js`
```javascript
export { default } from './MyOrdersPage.jsx';
```

---

### `src/pages/AuthPages/LoginPage.jsx`
```jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Layout.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Layout>
      <div
        className="py-5"
        style={{
          background: 'linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%)',
          minHeight: '520px',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-5">
              <div className="card border-0 shadow-sm p-4 p-md-5" style={{ borderRadius: '4px' }}>
                <h1 className="h3 fw-bold mb-2" style={{ color: 'var(--dark-gray)' }}>
                  Acesse sua conta
                </h1>
                <p className="mb-4" style={{ fontSize: '14px', color: 'var(--dark-gray-2)' }}>
                  Novo cliente? Então registre-se{' '}
                  <Link to="/cadastro" style={{ color: 'var(--dark-gray-2)', textDecoration: 'underline' }}>
                    aqui
                  </Link>
                  .
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="login-email" className="form-label fw-bold" style={{ fontSize: '12px' }}>
                      Login *
                    </label>
                    <input
                      id="login-email"
                      type="email"
                      required
                      className="form-control form-control-lg border-0"
                      style={{ backgroundColor: 'var(--light-gray-3)', fontSize: '15px' }}
                      placeholder="Insira seu login ou email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="login-password" className="form-label fw-bold" style={{ fontSize: '12px' }}>
                      Senha *
                    </label>
                    <input
                      id="login-password"
                      type="password"
                      required
                      className="form-control form-control-lg border-0"
                      style={{ backgroundColor: 'var(--light-gray-3)', fontSize: '15px' }}
                      placeholder="Insira sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-drip-primary w-100 py-2"
                    style={{ height: '48px', fontSize: '16px' }}
                  >
                    Acessar Conta
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
```

### `src/pages/AuthPages/RegisterPage.jsx`
```jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Layout.jsx';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <h1 className="h3 fw-bold mb-4" style={{ color: 'var(--dark-gray)' }}>
              Criar Conta
            </h1>

            <form
              onSubmit={handleSubmit}
              className="card border-0 shadow-sm p-4 p-md-5"
              style={{ borderRadius: '4px' }}
            >
              <h2 className="h6 fw-bold mb-3" style={{ color: 'var(--dark-gray-2)' }}>
                Informações Pessoais
              </h2>
              <hr className="mt-0 mb-4" />

              <div className="mb-3">
                <label htmlFor="reg-name" className="form-label fw-bold" style={{ fontSize: '12px' }}>
                  Nome Completo *
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  className="form-control border-0 py-2"
                  style={{ backgroundColor: 'var(--light-gray-3)' }}
                  placeholder="Insira seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="reg-cpf" className="form-label fw-bold" style={{ fontSize: '12px' }}>
                  CPF *
                </label>
                <input
                  id="reg-cpf"
                  type="text"
                  required
                  className="form-control border-0 py-2"
                  style={{ backgroundColor: 'var(--light-gray-3)' }}
                  placeholder="Insira seu CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="reg-email" className="form-label fw-bold" style={{ fontSize: '12px' }}>
                  E-mail *
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  className="form-control border-0 py-2"
                  style={{ backgroundColor: 'var(--light-gray-3)' }}
                  placeholder="Insira seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-drip-primary w-100"
                style={{ height: '48px', fontSize: '16px' }}
              >
                Criar Conta
              </button>

              <p className="text-center mt-3 mb-0" style={{ fontSize: '14px' }}>
                Já possui conta?{' '}
                <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                  Entrar
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
```

### `src/pages/AuthPages/InfoPage.jsx`
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout.jsx';

const InfoPage = ({ title, subtitle, isNotFound = false }) => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="card border-0 shadow-sm p-4 p-md-5" style={{ borderRadius: '4px' }}>
          <h1 className="h2 fw-bold mb-3" style={{ color: 'var(--dark-gray)' }}>
            {title}
          </h1>
          <p className="mb-4" style={{ color: 'var(--dark-gray-2)', maxWidth: '650px' }}>
            {subtitle}
          </p>
          <div>
            <Link
              to={isNotFound ? '/' : '/produtos'}
              className="btn btn-drip-primary px-4 py-2"
            >
              {isNotFound ? 'Voltar para Home' : 'Explorar Produtos'}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InfoPage;
```

### `src/pages/AuthPages/index.js`
```javascript
export { default as LoginPage } from './LoginPage.jsx';
export { default as RegisterPage } from './RegisterPage.jsx';
export { default as InfoPage } from './InfoPage.jsx';
```

---

## 7. `README.md` do Repositório (Documentação para Entrega)

```markdown
# Drip Store — Projeto Final Front-end (Digital College)

Aplicação web de e-commerce desenvolvida em **React + JavaScript + Bootstrap 5**, seguindo fielmente os requisitos mínimos da documentação oficial do projeto Digital Store e o protótipo no Figma.

## Tecnologias Utilizadas
- React 18
- Vite
- React Router DOM v6
- Bootstrap 5
- CSS3 (Variables & Custom Components)

## Funcionalidades
- **Página Inicial (`/`)**: Carrossel interativo de banners, coleções em destaque, atalhos por categoria, vitrine com 8 produtos em alta e seção de oferta especial.
- **Busca Global**: Campo de busca no cabeçalho que redireciona para `/products?filter=<termo>` ao clicar na lupa ou pressionar `Enter`.
- **Listagem de Produtos (`/produtos` e `/products`)**: Filtragem combinada por Marca, Categoria, Gênero e Estado (`FilterGroup`), ordenação por Menor/Maior preço e contagem dinâmica de resultados.
- **Visualização de Produto (`/product/:id`)**: Galeria com miniaturas interativas (`Gallery`), seleção de variações de tamanho e cor (`ProductOptions`), informações e CTA de compra (`BuyBox`) e vitrine de produtos recomendados.
- **Abas Extras Funcionais**: Categorias (`/categorias`), Meus Pedidos (`/meus-pedidos` com persistência em `localStorage`), Login (`/login`) e Cadastro (`/cadastro`).

## Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. (Opcional) Copie a pasta public/ do repositório oficial
# https://github.com/digitalcollegebr/projeto-digital-store
# para usar as fotos originais dos tênis e banners.
# Obs.: Mesmo sem a pasta public/, o sistema possui fallback visual em SVG.

# 3. Rodar o servidor de desenvolvimento
npm run dev
```

## Integrantes da Equipe
- **Seu Nome Completo** *(preencha com os nomes de todos os integrantes antes da entrega)*
```

---

### Checklist Rápido antes de Subir no GitHub (Entrega até 20/11/2026)

1. Execute `npm install` e depois `npm run dev` para validar localmente no navegador.
2. (Recomendado) Copie os arquivos da pasta `public/` do repositório oficial (`https://github.com/digitalcollegebr/projeto-digital-store`) para dentro da sua pasta `public/` para exibir as fotografias reais dos produtos e banners.
3. Rode `npm run build` para garantir que não há nenhum erro de compilação.
4. Atualize a seção **Integrantes da Equipe** no `README.md` com o nome completo de todos os participantes antes de enviar o link do repositório.