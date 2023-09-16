# Shopping Cart Kata


SOURCE: https://www.codurance.com/katas/shopping-cart-kata

## What do we want to build?

We are building a shopping cart for an online grocery shop.  The idea of this kata is to build the product in an iterative way.

### Technical requirements

    The price per unit is calculated based on the product cost and the percentage of revenue that the company wants for that product.
    The price has to be rounded up; so if a price per unit calculated is 1.7825, then the expected price per unit for that product is 1.79
    The final price of the product is then calculated as the price per unit with the VAT rounded up.
    Products are not allowed to have the same name.

### List of products
| Name      | Cost   | % Revenue | Price per unit | Tax                   | Final price |
|-----------|--------|-----------|----------------|-----------------------|-------------|
| Iceberg 🥬 | 1.55 € | 15 %      | 1,79 €         | Normal (21%)          | 2.17 €      |
| Tomato 🍅  | 0.52 € | 15 %      | 0.60 €         | Normal (21%)          | 0.73 €      |
| Chicken 🍗 | 1.34 € | 12 %      | 1.51 €         | Normal (21%)          | 1.83 €      |
| Bread 🍞   | 0.71 € | 12 %      | 0.80 €         | First necessity (10%) | 0.88 €      |
| Corn 🌽    | 1.21 € | 12 %      | 1.36 €         | First necessity (10%) | 1.50 €      |

### List of discounts
| Discounts code | Amount |
|----------------|--------|
| PROMO_5        | 5%     |
| PROMO_10       | 10%    |


## Use cases
### List the shopping cart

    As customer
    I want to see my shipping cart

#### Empty cart

| Product name   | Price with VAT | Quantity                     |
|----------------|----------------|------------------------------|
|                |                |                              |
| **Promotion**  |                |                              |
| Total products |                | 0                            |
| Total price    |                | 0.00 €                       |

### Add product to shopping cart

    As customer
    I want to add Iceberg 🥬 to my shipping cart
    I want to add Tomatoe 🍅 to my shipping cart
    I want to add Chicken 🍗 to my shipping cart
    I want to add Bread 🍞 to my shipping cart
    I want to add Corn 🌽 to my shipping cart
    I want to see my shipping cart

--------------------------------------------
| Product name | Price with VAT | Quantity |
| -----------  | -------------- | -------- |
| Iceberg 🥬   | 2.17 €         | 1        |
| Tomatoe 🍅   | 0.73 €         | 1        |
| Chicken 🍗   | 1.83 €         | 1        |
| Bread 🍞     | 0.88 €         | 1        |
| Corn 🌽      | 1.50 €         | 1        |
| **Promotion**  |                |        |
| Total products |                | 5      |
| Total price    |                | 7.11 € |


### Add product to shopping cart

    As customer
    I want to add Iceberg 🥬 to my shipping cart
    I want to add Iceberg 🥬 to my shipping cart
    I want to add Iceberg 🥬 to my shipping cart
    I want to add Tomatoe 🍅 to my shipping cart
    I want to add Chicken 🍗 to my shipping cart
    I want to add Bread 🍞 to my shipping cart
    I want to add Bread 🍞 to my shipping cart
    I want to add Corn 🌽 to my shipping cart
    I want to see my shipping cart



--------------------------------------------
| Product name | Price with VAT | Quantity |
| -----------  | -------------- | -------- |
| Iceberg 🥬   | 2.17 €         | 3        |
| Tomatoe 🍅   | 0.73 €         | 1        |
| Chicken 🍗   | 1.83 €         | 1        |
| Bread 🍞     | 0.88 €         | 2        |
| Corn 🌽      | 1.50 €         | 1        |
| **Promotion**  |                |         |
| Total products |                | 8       |
| Total price    |                | 12.33 € |


### Apply discount to the shopping cart

    As customer
    I want to add Iceberg 🥬 to my shipping cart
    I want to add Iceberg 🥬 to my shipping cart
    I want to add Iceberg 🥬 to my shipping cart
    I want to add Tomatoe 🍅 to my shipping cart
    I want to add Chicken 🍗 to my shipping cart
    I want to add Bread 🍞 to my shipping cart
    I want to add Bread 🍞 to my shipping cart
    I want to add Corn 🌽 to my shipping cart
    I want to apply my coupon code PROMO_5
    I want to see my shipping cart

--------------------------------------------
| Product name | Price with VAT | Quantity |
| -----------  | -------------- | -------- |
| Iceberg 🥬   | 2.17 €         | 3        |
| Tomatoe 🍅   | 0.73 €         | 1        |
| Chicken 🍗   | 1.83 €         | 1        |
| Bread 🍞     | 0.88 €         | 2        |
| Corn 🌽      | 1.50 €         | 1        |
| **Promotion**|| 5% off with code PROMO_5 |
| Total products |                | 8      |
| Total price    |                | 11.71 €|


## Disclaimer

    The graphic examples that you see on the kata are not there to be implemented if you don't want to, are there as a reference of how the kata works
