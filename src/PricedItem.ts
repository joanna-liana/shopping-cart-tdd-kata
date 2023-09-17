import { Tax } from './Item';

type ItemProps = {
  name: string;
  cost: number;
  revenue: number;
  tax: Tax;
};

export function roundUp(originalNumber: number) {
  return Math.ceil(originalNumber * 100) / 100;
}

export class PricedItem {
  constructor(private readonly props: ItemProps) {}

  get unitPrice() {
    const item = this.props;
    const pricePerUnit = (item.cost * item.revenue) + item.cost;

    return roundUp(pricePerUnit);
  }

  get finalPrice() {
    const item = this.props;
    const taxValue = Number((this.unitPrice * item.tax).toPrecision(2));
    const finalPrice = this.unitPrice + taxValue;

    return roundUp(finalPrice);
  }
}
