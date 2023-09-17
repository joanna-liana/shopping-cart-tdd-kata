import { PricedProduct } from '../src/PricedProduct';
import { Tax } from '../src/Product';

describe('Calculate product price use case', () => {
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

  describe('Priced Item', () => {
    it.each([
      [
        new PricedProduct(ICEBERG),
        1.79
      ],
      [
        new PricedProduct(TOMATO),
        0.60
      ],
      [
        new PricedProduct(CHICKEN),
        1.51
      ],
      [
        new PricedProduct(BREAD),
        0.80
      ],
      [
        new PricedProduct(CORN),
        1.36
      ]
    ])('returns the price per unit', (product, expectedPrice) => {
      expect(product.unitPrice).toEqual(expectedPrice);
    });

    it.each([
      [
        new PricedProduct(ICEBERG),
        2.17
      ],
      [
        new PricedProduct(TOMATO),
        0.73
      ],
      [
        new PricedProduct(CHICKEN),
        1.83
      ],
      [
        new PricedProduct(BREAD),
        0.88
      ],
      [
        new PricedProduct(CORN),
        1.50
      ]
    ])('returns the final product price', (product, expectedPrice) => {
      expect(product.finalPrice).toEqual(expectedPrice);
    });
  });
});
