describe('Price calculator', () => {
  it('returns the price per unit', () => {
    const item = {
      name: 'Iceberg',
      cost: 1.55,
      revenue: 0.15
    };

    const pricePerUnit = calculatePricePerUnitOf(item);

    expect(pricePerUnit).toEqual(1.79);
  });
});

type Item = {
  name: string;
  cost: number;
  revenue: number;
};

function calculatePricePerUnitOf(item: Item) {
  throw new Error('Function not implemented.');
}
