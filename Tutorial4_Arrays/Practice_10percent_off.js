/*
Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.
*/

let prices = [250, 645, 300, 900, 50];

let sum = 0;
for (let priceIndex in prices) {
    let price = prices[priceIndex];
    let percentOff = (price * 10) / 100;
    prices[priceIndex] = price - percentOff;
    console.log(`After 10% off of ${price} will be ${prices[priceIndex]}`);
}


