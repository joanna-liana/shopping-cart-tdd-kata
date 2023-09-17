import { Product } from './Product';

export function roundUp(originalNumber: number) {
  return Math.ceil(originalNumber * 100) / 100;
}

export class PricedProduct {
  constructor(private readonly product: Product) {}

  get unitPrice() {
    const { cost, revenue } = this.product;
    const unitPrice = (cost * revenue) + cost;

    return roundUp(unitPrice);
  }

  get finalPrice() {
    const taxValue = Number((this.unitPrice * this.product.tax).toPrecision(2));
    const finalPrice = this.unitPrice + taxValue;

    return roundUp(finalPrice);
  }
}
