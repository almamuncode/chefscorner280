import type { MenuItem } from "@/types/menu";
export function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}
export function itemPrice(item: MenuItem) {
  if (item.price !== undefined) return money(item.price);
  if (item.options?.length)
    return `From ${money(Math.min(...item.options.map((o) => o.price)))}`;
  return item.priceNote || "Please ask";
}
