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
