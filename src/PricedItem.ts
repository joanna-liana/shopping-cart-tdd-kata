import { Tax } from './Item';
import { calculateUnitPriceOf } from './priceCalculator';

type ItemProps = {
  name: string;
  cost: number;
  revenue: number;
  tax: Tax;
};

export class PricedItem {
  constructor(private readonly props: ItemProps) {}

  get unitPrice() {
    return calculateUnitPriceOf(this.props);
  }
}
