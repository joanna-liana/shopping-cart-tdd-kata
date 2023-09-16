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
