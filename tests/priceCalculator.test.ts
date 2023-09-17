describe('Price calculator', () => {
  it.each([
    [
      {
        name: 'Iceberg',
        cost: 1.55,
        revenue: 0.15
      },
      1.79
    ],
    [
      {
        name: 'Tomato',
        cost: 0.52,
        revenue: 0.15
      },
      0.60
    ],
    [
      {
        name: 'Chicken',
        cost: 1.34,
        revenue: 0.12
      },
      1.51
    ],
    [
      {
        name: 'Bread',
        cost: 0.71,
        revenue: 0.12
      },
      0.80
    ],
    [
      {
        name: 'Corn',
        cost: 1.21,
        revenue: 0.12
      },
      1.36
    ]
  ])('returns the price per unit', (item, expectedPrice) => {
    const pricePerUnit = calculatePricePerUnitOf(item);

    expect(pricePerUnit).toEqual(expectedPrice);
  });
});

type Item = {
  name: string;
  cost: number;
  revenue: number;
};

function roundUp(originalNumber: number) {
  return Math.ceil(originalNumber * 100) / 100;
}

function calculatePricePerUnitOf(item: Item) {
  const pricePerUnit = (item.cost * item.revenue) + item.cost;

  return roundUp(pricePerUnit);
}
