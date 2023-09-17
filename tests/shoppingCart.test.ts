describe('Shopping cart', () => {

  it('is empty when no product are added', () => {
    const shoppingCart = { products: [], totalProducts: 0, totalPrice: 0 };

    expect(shoppingCart.products).toEqual([]);
    expect(shoppingCart.totalProducts).toEqual(0);
    expect(shoppingCart.totalPrice).toEqual(0);
  });
});
