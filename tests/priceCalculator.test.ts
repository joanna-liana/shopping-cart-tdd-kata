enum Tax {
  NORMAL = 0.21,
  FIRST_NECESSITY = 0.10
}

type Item = {
  name: string;
  cost: number;
  revenue: number;
  tax: Tax;
};


describe('Price calculator', () => {
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
    const pricePerUnit = calculatePricePerUnitOf(item);

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
});

function roundUp(originalNumber: number) {
  return Math.ceil(originalNumber * 100) / 100;
}

function calculatePricePerUnitOf(item: Item) {
  const pricePerUnit = (item.cost * item.revenue) + item.cost;

  return roundUp(pricePerUnit);
}

function calculateFinalPriceOf(item: Item) {
  const unitPrice = calculatePricePerUnitOf(item);
  const taxValue = Number((unitPrice * item.tax).toPrecision(2));
  const finalPrice = unitPrice + taxValue;

  return roundUp(finalPrice);
}
