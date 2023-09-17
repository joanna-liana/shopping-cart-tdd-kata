import { Tax } from '../src/Item';
import { calculateFinalPriceOf, calculateUnitPriceOf } from '../src/priceCalculator';
import { PricedItem } from '../src/PricedItem';

describe('Calculate item price use case', () => {
  const ICEBERG = {
    name: 'Iceberg',
    cost: 1.55,
    revenue: 0.15,
    tax: Tax.NORMAL
  };

  const TOMATO = {
    name: 'Tomato',
    cost: 0.52,
    revenue: 0.15,
    tax: Tax.NORMAL
  };

  const CHICKEN = {
    name: 'Chicken',
    cost: 1.34,
    revenue: 0.12,
    tax: Tax.NORMAL
  };

  const BREAD = {
    name: 'Bread',
    cost: 0.71,
    revenue: 0.12,
    tax: Tax.FIRST_NECESSITY
  };

  const CORN = {
    name: 'Corn',
    cost: 1.21,
    revenue: 0.12,
    tax: Tax.FIRST_NECESSITY
  };

  it.each([
    [
      ICEBERG,
      1.79
    ],
    [
      TOMATO,
      0.60
    ],
    [
      CHICKEN,
      1.51
    ],
    [
      BREAD,
      0.80
    ],
    [
      CORN,
      1.36
    ]
  ])('returns the price per unit', (item, expectedPrice) => {
    const pricePerUnit = calculateUnitPriceOf(item);

    expect(pricePerUnit).toEqual(expectedPrice);
  });

  it.each([
    [
      ICEBERG,
      2.17
    ],
    [
      TOMATO,
      0.73
    ],
    [
      CHICKEN,
      1.83
    ],
    [
      BREAD,
      0.88
    ],
    [
      CORN,
      1.50
    ]
  ])('returns the final item  price', (item, expectedPrice) => {
    const pricePerUnit = calculateFinalPriceOf(item);

    expect(pricePerUnit).toEqual(expectedPrice);
  });

  describe('Priced Item', () => {
    it.each([
      [
        new PricedItem(ICEBERG),
        1.79
      ],
    ])('returns the price per unit', (item, expectedPrice) => {
      expect(item.unitPrice).toEqual(expectedPrice);
    });
  });
});
