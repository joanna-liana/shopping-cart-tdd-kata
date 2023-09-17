import { Item } from './Item';

export function roundUp(originalNumber: number) {
  return Math.ceil(originalNumber * 100) / 100;
}

export class PricedItem {
  constructor(private readonly item: Item) {}

  get unitPrice() {
    const { cost, revenue } = this.item;
    const unitPrice = (cost * revenue) + cost;

    return roundUp(unitPrice);
  }

  get finalPrice() {
    const taxValue = Number((this.unitPrice * this.item.tax).toPrecision(2));
    const finalPrice = this.unitPrice + taxValue;

    return roundUp(finalPrice);
  }
}
