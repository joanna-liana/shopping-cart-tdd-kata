import { Tax } from './Item';
import { calculateFinalPriceOf, roundUp } from './priceCalculator';

type ItemProps = {
  name: string;
  cost: number;
  revenue: number;
  tax: Tax;
};

export class PricedItem {
  constructor(private readonly props: ItemProps) {}

  get unitPrice() {
    const item = this.props;
    const pricePerUnit = (item.cost * item.revenue) + item.cost;

    return roundUp(pricePerUnit);
  }

  get finalPrice() {
    return calculateFinalPriceOf(this.props);
  }
}
