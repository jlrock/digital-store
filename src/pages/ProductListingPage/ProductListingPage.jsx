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
        ? `Resultados para "${searchQuery}" - ${filteredProducts.length} ${filteredProducts.length === 1 ? 'produto' : 'produtos'
        }`
        : urlCategory
            ? `${urlCategory} - ${filteredProducts.length} ${filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'
            }`
            : `${filteredProducts.length} ${filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'
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
