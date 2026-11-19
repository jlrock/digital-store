export function formatPrice(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) return '';
    return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    });
}
