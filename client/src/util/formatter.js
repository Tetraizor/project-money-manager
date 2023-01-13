export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'TRY',
        currencyDisplay: 'symbol'
    }).format(amount);
}