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
