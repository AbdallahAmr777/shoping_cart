const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "GBP",
  style: "currency",
});

const formatCurrency = (Number) => {
  return CURRENCY_FORMATTER.format(Number);
};
export default formatCurrency;
