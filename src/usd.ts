const format = new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD",
  minimumFractionDigits: 2
}).format;
export function usd(amount: number) {
  return format(amount / 100);
}
