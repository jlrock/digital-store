import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";

const Section = ({
    title,
    titleAlign = "left",
    link,
    children,
    className = "",
}) => {
    const isCentered = titleAlign === "center";
    const isExternalLink = link?.href?.startsWith("http");

    return (
        <section className={`drip-section ${className}`}>
            {title && (
                <div
                    className={`drip-section-header ${isCentered ? "drip-section-header--center" : ""
                        }`}
                >
                    <h2 className="drip-section-title">{title}</h2>

                    {link?.text &&
                        link?.href &&
                        (isExternalLink ? (
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
                        ))}
                </div>
            )}

            <div>{children}</div>
        </section>
    );
};

export default Section;
