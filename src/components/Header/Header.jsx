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
