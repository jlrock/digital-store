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
                                className={`d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 py-3 ${idx < orders.length - 1 ? 'border-bottom' : ''
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
