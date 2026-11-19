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
