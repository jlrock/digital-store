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
