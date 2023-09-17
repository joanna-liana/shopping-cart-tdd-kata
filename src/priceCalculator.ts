import { Item } from './Item';

function roundUp(originalNumber: number) {
  return Math.ceil(originalNumber * 100) / 100;
}

export function calculateUnitPriceOf(item: Item) {
  const pricePerUnit = (item.cost * item.revenue) + item.cost;

  return roundUp(pricePerUnit);
}

export function calculateFinalPriceOf(item: Item) {
  const unitPrice = calculateUnitPriceOf(item);
  const taxValue = Number((unitPrice * item.tax).toPrecision(2));
  const finalPrice = unitPrice + taxValue;

  return roundUp(finalPrice);
}
